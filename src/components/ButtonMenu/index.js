import './ButtonMenu.css'
import MenuIcon from '@material-ui/icons/Menu';
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

export default function ButtonMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="containerButton">
            <Button
                // aria-controls="simple-menu"
                // aria-haspopup="true"
                onClick={handleClick}>
                <MenuIcon className="containerButton"/> 
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to='/' className="styleLink">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link to='/Offers' className="styleLink">
                    <MenuItem onClick={handleClose}>Ofertas</MenuItem>
                </Link>
                <Link to='/Contact' className="styleLink">
                    <MenuItem onClick={handleClose}>Contacto</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}