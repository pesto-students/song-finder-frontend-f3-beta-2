import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ReorderIcon from '@mui/icons-material/Reorder';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'block',

        [theme.breakpoints.up('sm')]: {
            width: '12rem',
            height: '3rem',
            margin: '0.1rem',
            padding: '0.3rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '8em',
            height: '2.5rem',
            margin: '0'
        }
    },
    Toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.whiteColor,
        borderBottom: `1px solid ${colors.greyWhite}`
    },
    LogInButton: {
        color: colors.primaryColor,
        fontSize: '1.5rem'
    },
    SignInButton: {
        color: colors.secondaryColor,
        fontSize: '1.5rem'
    },
    Link: {
        textDecoration: 'none !important'
    },
    Search: {
        display: 'flex',
        alignItems: 'center',
        background: colors.whiteColor,
        borderBottom: `2px solid ${colors.secondaryColor}`,
        borderRadius: 1,
        width: '20%',
        alignContent: 'center',
        '&:hover': {
            borderBottom: `1px solid ${colors.secondaryColor}`
        },
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '50%'
        }
    },
    Buttons: {
        display: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    stack: {
        color: colors.primaryColor.color,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('small')]: {
            display: 'block',
            width: '1rem',
            height: '1rem'
        }
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.Toolbar}>
                <Link to="/">
                    <img
                        className={classes.logo}
                        src={logo}
                        alt="Immersis Logo"
                    />
                </Link>

                <div className={classes.Search}>
                    <InputBase placeholder="Search..." />
                </div>
                <div className={classes.Buttons}>
                    <Link to="/login" className={classes.Link}>
                        <Button
                            size="medium"
                            variant="text"
                            className={classes.LogInButton}
                        >
                            Log In
                        </Button>
                    </Link>
                    <Link to="/signup" className={classes.Link}>
                        <Button
                            size="medium"
                            variant="text"
                            className={classes.SignInButton}
                        >
                            Sign In
                        </Button>
                    </Link>
                </div>
                <div className={classes.stack}>
                    <ReorderIcon />
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
