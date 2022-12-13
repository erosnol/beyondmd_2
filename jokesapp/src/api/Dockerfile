FROM node:17

# installs nodemon globally 
RUN npm install -g nodemon

# Copies layers to new path 
WORKDIR /app

# copies package.json before running npm 
COPY package.json . 

# Installs dependecies needed to run in image 
RUN npm install 

# Adds additional layers to image
COPY . .

# port 
EXPOSE 4001 

# Makes the image after copying and running node
CMD ["npm", "run", "dev"]
