import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCardIcon from '@mui/icons-material/AddCard';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleOpen} 
        endIcon={<AddCardIcon>AddCardIcon</AddCardIcon>}
      >
        Создать карту
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Box>
            <TextField 
              sx={{ mt: 2, width: 300 }}
              id="standard-basic" 
              label="Ваше имя" 
              variant="standard" 
            />
            <TextField
              sx={{ mt: 2, width: 300 }}
              id="outlined-number"
              label="Введите сумму в лирах, которую хотите получить"
              type="number"
              variant="standard"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}