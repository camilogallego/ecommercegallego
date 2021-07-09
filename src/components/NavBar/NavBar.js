import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Badge, } from '@material-ui/core'
import { ShoppingCart, } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import './NavBar.css'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ItemsContext } from '../../ItemsContext/ItemsContext'
import { Link } from 'react-router-dom'


function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, 
        {elevation: trigger ? 4 : 0,}
    );
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const useStyle = makeStyles(theme => ({

    menuButton: {
        marginRight: theme.spacing(1)

    },
    space: {
        flexGrow: 1
    },
    max: {
        marginBottom: 70
    },
    color:{
        color: "white"
    },
    style:{
        float: "right"
    }

}))

function NavBar(props) {
    
    
    const classes = useStyle()
    const [items, setItems] = useContext(ItemsContext)
    const [keyword, setkeyword] = useState('')

    const handleSubbmint = evt => {
        evt.preventDefault()
        
    }
    const handleChange = evt => {
        setkeyword(evt.target.value)
        filter(evt.target.value)
    }
    const filter = (search)=>{
        let ResultSearch = items.filter((element)=>{
            if(element.title.toStrin().toLowerCase().includes(search.toLowerCase())){
                return element
            }
            
        })
        
        setItems(ResultSearch)
    }

    return (
        <div>
            <CssBaseline />
            <ElevationScroll {...props}>
                <ThemeProvider theme={theme}>
                    <AppBar >
                        <Toolbar>
                            <ButtonMenu />
                            <Typography variant="h6" className={classes.space}>
                                <Button color="inherit">Login</Button>
                            </Typography>
                            <Typography variant="h6" className={classes.space}>
                                <form onSubmit={handleSubbmint}>
                                    <input placeholder="buscar" onChange={handleChange} type='text' value={keyword}></input>
                                </form>
                            </Typography>
                            <Link to={"/Cart"}>
                                <Badge
                                    badgeContent={items.length}
                                    color="error"
                                    className={classes.style}
                                >
                                    <ShoppingCart className={classes.color} />
                                </Badge>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.max}></div>
                </ThemeProvider>
            </ElevationScroll>

        </div>
    )
}

export default NavBar
