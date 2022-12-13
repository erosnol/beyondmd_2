import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { Document, Page } from 'react-pdf';


export default function Resume() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    window.open('https://resume02.tiiny.site/', '_blank');
  }
  const handleClose = () => setOpen(false);

  return ( 
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Preview Resume
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Document
          file='./Resume02.pdf'
          onLoadSuccess={() => console.log('PDF loaded successfully')}
          
        >
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </>
  );
}