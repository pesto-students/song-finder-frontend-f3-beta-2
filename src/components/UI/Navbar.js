import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import logo from '../../assets/logo.png'
import Link from '@mui/material/Link';
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
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderBottom: "1px solid #C4C4C4"
    },
    LogInButton: {
        color: "#FD1863",
        fontSize: "1.5rem"

    },
    SignInButton: {
        color: "#000036",
        fontSize: "1.5rem"

    }

}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <React.Fragment>

            <AppBar>
                <Toolbar className={classes.Toolbar} >
                    <Link href="/">
                        <img className={classes.logo} src={logo} alt='Immersis Logo' />
                    </Link>

                    <div>
                        <InputBase placeholder="Seach..." />
                    </div>
                    <div >
                        <Link href="/login" underline="none">

                            <Button size="medium" variant='text' className={classes.LogInButton} >Log In</Button>
                        </Link>
                        <Link href="/signup" underline="none">

                            <Button size="medium" variant="text" className={classes.SignInButton}>Sign In</Button>

                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}
export default Navbar