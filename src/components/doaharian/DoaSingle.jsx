import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const DoaSingle = ({ name, arabic, translation }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link onClick={handleClickOpen}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-slate-800">
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {name}
            </p>
          </div>
        </div>
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className='dark:bg-slate-800 dark:text-white min-w-[200px] sm:min-w-[500px]'>
          {name}
        </DialogTitle>
        <DialogContent className='dark:bg-slate-800'>
          <DialogContentText className='dark:text-white min-w-[200px] sm:min-w-[500px] text-right' sx={{fontSize:'20px', marginBottom:2}}>
            {arabic}
          </DialogContentText>
          <p className='dark:text-white min-w-[200px] sm:min-w-[500px] text-[12px] italic'>
            "{translation}"
          </p>
        </DialogContent>
        <DialogActions className='dark:bg-slate-800 min-w-[200px] sm:min-w-[500px]'>
          <Button onClick={handleClose} autoFocus>
            Kembali
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
};

export default DoaSingle;
