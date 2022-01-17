import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchResult } from '../../utils/resource';
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
        backgroundColor: colors.whiteColor.color,
        borderBottom: '1px solid #C4C4C4'
    },
    LogInButton: {
        color: colors.primaryColor.color,
        fontSize: '1.5rem'
    },
    SignInButton: {
        color: colors.secondaryColor.color,
        fontSize: '1.5rem'
    },
    Link: {
        textDecoration: 'none !important'
    },
    Search: {
        display: 'flex',
        alignItems: 'center',
        background: colors.whiteColor.color,
        borderBottom: '2px solid #000036',
        borderRadius: 1,
        width: '20%',
        alignContent: 'center',
        '&:hover': {
            borderBottom: '1px solid #000036'
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
    },
    bar: {
        borderBottom: '2px solid #000036'
    }
}));

function Navbar({ dispatch }) {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const search = (e) => {
        e.preventDefault();
        if (location.pathname === '/search') dispatch(fetchResult(input));
        navigate({ pathname: 'search', search: `?q=${input}` });
    };
    if (location.pathname === '/login' || location.pathname === '/signup') {
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
                </Toolbar>
            </AppBar>
        );
    }
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

                <form>
                    <Button type="submit" onClick={search}>
                        <SearchIcon />
                    </Button>
                    <InputBase
                        placeholder="Search..."
                        onChange={(e) => setInput(e.target.value)}
                        width="80%"
                        className={classes.bar}
                    />
                </form>

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
                            Sign Up
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

function mapStateToProps(state) {
    return { state };
}

const ConnectedNavbar = connect(mapStateToProps)(Navbar);

export default ConnectedNavbar;
