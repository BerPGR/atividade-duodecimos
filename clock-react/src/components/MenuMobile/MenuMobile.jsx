import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Box, Drawer } from '@mui/material'

import './MenuMobile.css'

const MenuMobile = ({ open, handleMenu }) => {
    return (
        <Drawer open={open} variant='temporary' anchor="right" className='menu-container'>
            <Box className="menu">
                <div className="icon-container">
                    <AiOutlineCloseCircle onClick={handleMenu} className='icon' />
                </div>
                <div className='links-container'>
                <a href='#'>Historia</a>
                <a href='#'>Historia</a>
                <a href='#'>Historia</a>
                </div>
            </Box>
        </Drawer>
    )
}

export default MenuMobile