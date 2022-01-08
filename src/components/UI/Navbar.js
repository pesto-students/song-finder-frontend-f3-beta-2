import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import logo from '../../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    logo: {
        display: "block",

        [theme.breakpoints.up("sm")]: {
            width: "12rem",
            height: "3rem",
            margin: "0.1rem",
            padding: "0.3rem"

        },
        [theme.breakpoints.down("sm")]: {
            width: "8em",
            height: "2.5rem",
            margin: "0"

        }

    },
    Toolbar: {
        backgroundColor: "#fff",
        borderBottom: "1px solid #C4C4C4"
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <React.Fragment>

            <AppBar>
                <Toolbar className={classes.Toolbar} >
                    <img className={classes.logo} src={logo} alt='Immersis Logo' />
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}
export default Navbar