import React from 'react'
import { AppBar, Toolbar, Typography,Button, IconButton, } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import './NavBar.css'
import ButtonMenu from '../ButtonMenu'



const useStyle = makeStyles(theme =>({
    offset:theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2)
    },
    space:{
        flexGrow: 1
    }
}))
function NavBar() {
    const classes = useStyle()
    return (
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu">
                       <ButtonMenu/>
                    </IconButton>
                    <Typography variant="h6"  className={classes.space}>
                        Menu
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
            </ThemeProvider>
        </div>
    )
}

export default NavBar
