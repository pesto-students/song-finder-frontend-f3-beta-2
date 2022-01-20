import {
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    root: {
        height: `${window.screen.height}px`,
        backgroundImage:
            "linear-gradient(to right bottom,  rgba(0, 0, 54, 0.90),rgba(253, 24, 99, 0.80)), url('https://i.imgur.com/K3wMWeK.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '0px',
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    },
    inputRoot: {
        '& .MuiInput-underline:after': {
            borderBottom: colors.border.borderBottom
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: colors.border.borderBottombefore
        }
    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto'
    },
    button: {
        backgroundColor: colors.background.primaryButton,
        color: colors.fontColor.textColor,
        margin: '1rem 0',
        '&:hover': {
            backgroundColor: colors.background.hoverButtonColor
        }
    },
    h4: {
        color: colors.h4.textColor,
        fontWeight: '700'
    },
    Avatar: {
        backgroundColor: colors.iconColorSecondary.background
    },
    label: {
        fontFamily: "'Baloo Da 2', cursive !important"
    },
    Link: {
        color: colors.LinkSecondary.linkColor,
        textDecoration: 'none !important'
    },
    LinkSignUp: {
        color: colors.Link.linkColor,
        textDecoration: 'none !important'
    }
}));

function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box sx={{ position: 'relative', top: '21%' }}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Paper
                            elevation={20}
                            className={classes.Paper}
                            sx={{ p: 100 }}
                        >
                            <Grid align="center">
                                <Avatar className={classes.Avatar}>
                                    <LockIcon />
                                </Avatar>
                                <Typography variant="h4" className={classes.h4}>
                                    {' '}
                                    Login
                                </Typography>
                                <Typography variant="caption1">
                                    Please fill this form
                                </Typography>
                            </Grid>
                            <form>
                                <TextField
                                    className={classes.inputRoot}
                                    fullWidth
                                    inputProps={{
                                        style: {
                                            fontFamily: "'Baloo Da 2', cursive "
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: '#000036',
                                            fontFamily: "'Baloo Da 2', cursive"
                                        }
                                    }}
                                    label="Name"
                                    margin="normal"
                                    variant="standard"
                                    placeholder="Enter Your Name"
                                />
                                <TextField
                                    className={classes.inputRoot}
                                    fullWidth
                                    label="Password"
                                    variant="standard"
                                    placeholder="Enter your Password"
                                    margin="normal"
                                    inputProps={{
                                        style: {
                                            fontFamily: "'Baloo Da 2', cursive "
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: '#000036',
                                            fontFamily: "'Baloo Da 2', cursive"
                                        }
                                    }}
                                />
                                <FormControlLabel
                                    value="Remember Me"
                                    control={<Checkbox />}
                                    label="Remember Me"
                                    labelPlacement="I accept Terms and Condition"
                                />
                                <Button
                                    type="submit"
                                    className={classes.button}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                >
                                    Log In
                                </Button>
                                <Typography>
                                    <Link
                                        className={classes.Link}
                                        to="/forgotPassword"
                                    >
                                        {' '}
                                        Forgot Password?
                                    </Link>
                                </Typography>
                                <Typography>
                                    Don&apos;t you Have an Account?
                                    <Link
                                        to="/signup"
                                        className={classes.LinkSignUp}
                                    >
                                        Sign Up
                                    </Link>
                                </Typography>
                            </form>
                        </Paper>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Login;
