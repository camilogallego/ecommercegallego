import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Badge, } from '@material-ui/core'
import { ShoppingCart, } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import './NavBar.css'
import MenuProduct from '../MenuProduct/MenuProduct'
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

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyle = makeStyles(theme => ({

	spaceTitle: {
		flexGrow: 1,
		color: 'black'
	},
	space: {
		marginRight: theme.spacing(2),
		textDecoration: 'none',
		color: "black",

	},
	max: {
		marginBottom: 140
	},
	color: {
		color: "black"
	},
	style: {
		float: "right",
	},
	fontFamily: {
		fontFamily: 'italic',
		flexGrow: 1,
		color: "black"
	},
	toolbar: {
		minHeight: 40,
		alignItems: 'center',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		flexGrow: 1,

	},

}))
export default function NavBar(props) {
	const classes = useStyle();
	const [items] = useContext(ItemsContext)
	return (
		< >
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ElevationScroll  {...props}>
					<AppBar >
						<Toolbar className={classes.toolbar}>
							<Typography className={classes.spaceTitle}></Typography >
							<h3 className={classes.fontFamily}>Sueña Ultimate Shop</h3>
						</Toolbar>
						<Toolbar className={classes.toolbar}>
							<Link to={"/"} className={classes.space}>
								<Typography >Inicio</Typography>
							</Link>
							<MenuProduct />
							<Typography className={classes.spaceTitle}></Typography >
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
				</ElevationScroll>
				<div className={classes.max}></div>
			</ThemeProvider>
		</>
	);
}