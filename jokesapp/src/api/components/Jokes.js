import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing(1)
  },
  colorPaper: {
    backgroundColor: "lightgreen"
  }
}));

export default function Jokes () {
  const classes = useStyles();

  // Declare a new state variable, which we'll call "data"
  const [data, setData] = useState(null);

  // Fetch the data from the API in an async function
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Use the useEffect hook to fetch the data when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  // If the data is not yet available, return a loading message
  if (!data) {
    return <p>Loading...</p>;
  }

  // Otherwise, display the joke in the component
  return (
    <Paper variant="auto" className={classes.root}>
    <List className={classes.colorPaper}>
      <ListItem key={data.id}>
        <ListItemText
          primary={<Typography variant="body1">{data.joke}</Typography>}
        />
      </ListItem>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchData}
        className={classes.button}
      >
        New Joke
      </Button>
      
    </List>
    </Paper>
  );
};
