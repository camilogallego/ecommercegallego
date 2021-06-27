import React, { useState, useRef } from 'react';
import './ButtonMenu.css'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'


export default function ButtonMenu() {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }


    return (
        <div >
            <Button className="but"
                ref={anchorRef}
                onClick={handleToggle}
            >
                <MenuIcon className="iconMenu" />
            </Button>
            <Popper className="but" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow className="but"
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className="but">
                            <ClickAwayListener className="but" onClickAway={handleClose}>
                                <MenuList className="but"
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <Link to='/' className="styleLink">
                                        <MenuItem onClick={handleClose}>Home</MenuItem>
                                    </Link>
                                    <Link to='/Products' className="styleLink">
                                        <MenuItem onClick={handleClose}>Productos</MenuItem>
                                    </Link>
                                    <Link to='/Contact' className="styleLink">
                                        <MenuItem onClick={handleClose}>Contacto</MenuItem>
                                    </Link>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </div>
    );
}