import {
    Checkbox,
    Container,
    FormControlLabel,
    FormHelperText,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import colors from '../../colors';

const useStyles = makeStyles(() => ({
    inputRoot: {
        '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${colors.secondColor}`
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: `2px solid ${colors.secondColor} !important`
        }
    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto'
    },
    button: {
        backgroundColor: colors.secondaryColor,
        color: colors.whiteColor,
        margin: '1rem 0',
        '&:hover': {
            backgroundColor: `${colors.background.hoverButtonColor} !important`
        }
    },
    h4: {
        color: colors.secondaryColor,
        fontWeight: '700'
    },
    Avatar: {
        backgroundColor: `${colors.primaryColor} !important`
    }
}));

function SignUp() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );
    const baseURL = 'http://localhost:5000/auth';
    const onSubmit = (data) => {
        axios.post(baseURL, data).then((res) => {
            const Response = res.data;
            if (Response.success) {
                setOpen(true);
                setMessage(Response.message);
                setTimeout(() => {
                    navigate('/login');
                }, 6000);
            } else {
                setOpen(true);
                setMessage(Response.message);
                setTimeout(() => {
                    navigate('/login');
                }, 6000);
            }
        });
    };
    return (
        <Box sx={{ p: 1, mt: 10, mb: 5 }} className={classes.root}>
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
                                Sign Up
                            </Typography>
                            <Typography variant="caption1">
                                Please fill this form
                            </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* UserName Field */}
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
                                label="First Name"
                                margin="normal"
                                variant="standard"
                                placeholder="Enter Your UserName"
                                name="firstName"
                                inputRef={register({
                                    required: 'First Name is Required'
                                })}
                                error={errors.firstName}
                                helperText={errors.firstName?.message}
                                type="text"
                            />
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
                                label="Last Name"
                                margin="normal"
                                variant="standard"
                                placeholder="Enter Your UserName"
                                name="lastName"
                                inputRef={register({
                                    required: 'Last Name is Required'
                                })}
                                error={errors.lastName}
                                helperText={errors.lastName?.message}
                                type="text"
                            />

                            {/* Email field */}
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
                                variant="standard"
                                margin="normal"
                                label="Email"
                                placeholder="name@domain.com"
                                name="email"
                                type="email"
                                inputRef={register({
                                    required: 'Email is Required'
                                })}
                                error={errors.email}
                                helperText={errors.email?.message}
                            />

                            {/* Password Field */}
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
                                    required: 'Password is Required'
                                })}
                                error={errors.password}
                                helperText={errors.password?.message}
                                type="password"
                            />

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
                                margin="normal"
                                placeholder="Confirm Password"
                                variant="standard"
                                label="Confirm Password"
                                name="confirmPassword"
                                inputRef={register({
                                    required: 'Confirm Password is required'
                                })}
                                error={errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                                type="password"
                            />
                            <FormControl error={Boolean(errors.tnc)}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="tnc"
                                            inputRef={register({
                                                required:
                                                    'Please Agree Our Terms And Condition'
                                            })}
                                        />
                                    }
                                    label="I accept terms and condition"
                                />
                                <FormHelperText>
                                    {errors.tnc?.message}
                                </FormHelperText>
                            </FormControl>

                            <Button
                                type="submit"
                                className={classes.button}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                    severity="success"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                />
            </Container>
        </Box>
    );
}

export default SignUp;
