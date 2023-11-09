import React from 'react'

// material ui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './Modals.css'

const CorrectModal = ({ handleClose, open }) => {
  console.log(open)
  return (
    <Modal
      open={open.open}
      onClose={handleClose}
    >
      <Box className={`modals ${open.correctModal ? 'drop-shadow-correct ' : 'drop-shadow-wrong '}`}>
        <img src='./wrong.svg' className='close-modal' onClick={handleClose} />
        <h1 className={`${open.correctModal ? 'correct' : 'wrong'}`}>{open.correctModal ? 'CORRETO' : 'Errado'}</h1>

        {open.correctModal ? <img src='./correct.svg' /> : <img src='./wrong.svg' />}
      </Box>
    </Modal>
  )
}

export default CorrectModal