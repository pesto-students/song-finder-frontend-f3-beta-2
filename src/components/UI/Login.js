import {
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import colors from '../../colors';

const useStyles = makeStyles(() => ({
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
        backgroundColor: `${colors.primaryColor} !important`,
        color: colors.whiteColor,
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
    },
    message: {
        color: colors.primaryColor
    }
}));

function Login() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { register, handleSubmit, errors } = useForm();
    const baseURL = 'http://localhost:5000';
    const [message, setmessage] = React.useState('');
    const [loading, setloading] = React.useState(false);
    const onSubmit = (data) => {
        axios.post(`${baseURL}/auth/login`, data).then((res) => {
            const Response = res.data;
            if (Response.success) {
                setloading(true);
                setmessage(Response.message);
                setTimeout(() => {
                    navigate('/');
                }, 6000);
            } else {
                setmessage(Response.message);
            }
        });
    };
    return (
        <Box sx={{ p: 1, mt: 10, mb: 18 }}>
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
                            <Typography variant="caption">
                                Please fill this form
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.message}
                            >
                                {message}
                            </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                        color: colors.secondaryColor,
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                label="Email"
                                margin="normal"
                                variant="standard"
                                placeholder="Enter Your Registered Email"
                                name="email"
                                inputRef={register({
                                    required: 'Email Is Required'
                                })}
                                error={errors.email}
                                helperText={errors.email?.message}
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
                                        color: colors.secondaryColor,
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                name="password"
                                inputRef={register({
                                    required: 'Password Is Required'
                                })}
                                error={errors.password}
                                helperText={errors.password?.message}
                            />
                            <FormControlLabel
                                value=""
                                control={
                                    <Checkbox
                                        name="RememberMe"
                                        inputRef={register()}
                                    />
                                }
                                label="Remember Me"
                                labelPlacement="I accept Terms and Condition"
                            />
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                loadingPosition="start"
                                variant="contained"
                                color="secondary"
                                fullWidth
                                className={classes.button}
                            >
                                Log In
                            </LoadingButton>
                            {/* <Button
                                type="submit"
                                className={classes.button}
                                fullWidth
                                variant="contained"
                                color="secondary"
                            >
                                Log In
                            </Button> */}
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
    );
}

export default Login;
