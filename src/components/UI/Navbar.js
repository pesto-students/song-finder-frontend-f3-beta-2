import { AppBar, Button, InputBase, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
            width: '6rem',
            height: '2.1rem',
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
        fontSize: '1.3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    SignInButton: {
        color: colors.secondaryColor,
        fontSize: '1.3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    HistoryButton: {
        color: colors.secondaryColor,
        fontSize: '1.1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    LogoutButton: {
        color: colors.secondaryColor,
        fontSize: '1.1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
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
            display: 'flex',
            width: '30%'
        }
    },
    Buttons: {
        display: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    stack: {
        color: colors.primaryColor,
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
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    console.log('Anchor is', anchorEl);
    const open = Boolean(anchorEl);
    console.log('Open is', open);
    const handleClick = (event) => {
        console.log(anchorEl);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOut = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    {localStorage.getItem('loggedin') === 'true' ? (
                        <>
                            <Button
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <Avatar src="" />
                            </Button>

                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        to="/history"
                                        className={classes.Link}
                                    >
                                        <Button
                                            size="medium"
                                            variant="text"
                                            className={classes.HistoryButton}
                                        >
                                            History
                                        </Button>
                                    </Link>
                                </MenuItem>

                                <MenuItem onClick={logOut}>
                                    <Link to="/login" className={classes.Link}>
                                        <Button
                                            size="medium"
                                            variant="text"
                                            className={classes.LogoutButton}
                                        >
                                            Log out
                                        </Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
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
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <Button
                                    id="fade-button"
                                    aria-controls={
                                        open ? 'fade-menu' : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <ReorderIcon />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button'
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            to="/login"
                                            className={classes.Link}
                                        >
                                            <Button
                                                size="medium"
                                                variant="text"
                                                className={classes.LogInButton}
                                            >
                                                Log In
                                            </Button>
                                        </Link>
                                    </MenuItem>

                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            to="/signup"
                                            className={classes.Link}
                                        >
                                            <Button
                                                size="medium"
                                                variant="text"
                                                className={classes.SignInButton}
                                            >
                                                Sign In
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

function mapStateToProps(state) {
    return { state };
}

const ConnectedNavbar = connect(mapStateToProps)(Navbar);

export default ConnectedNavbar;
