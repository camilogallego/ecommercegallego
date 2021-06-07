import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import './NavBar.css'
import ButtonMenu from '../ButtonMenu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
    
    menuButton: {
        marginRight: theme.spacing(2)

    },
    space: {
        flexGrow: 1
    },
    max:{
        marginBottom: 100
    }

}))
function NavBar(props) {
    const classes = useStyle()
    return (
        <div>
            <CssBaseline />
            <ElevationScroll {...props}>
                <ThemeProvider theme={theme}>

                    <AppBar >
                        <Toolbar>
                            <IconButton color="inherit" aria-label="menu" >
                                <ButtonMenu />
                            </IconButton>
                            <Typography variant="h6" className={classes.space}>
                                Menu
                        </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.max}></div>
                </ThemeProvider>
            </ElevationScroll>
            
        </div>
    )
}

export default NavBar
