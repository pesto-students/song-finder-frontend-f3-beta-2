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
import LockIcon from '@mui/icons-material/Lock';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import React from 'react';
import { useForm } from 'react-hook-form';
import colors from '../../colors';

const useStyles = makeStyles(() => ({
    inputRoot: {
        '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${colors.secondColor}`
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: '2px solid rgba(0, 0, 54, .7) !important'
        }
    },

    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto'
    },
    button: {
        backgroundColor: '#000036',
        color: '#fff',
        margin: '1rem 0',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 54, .9) !important'
        }
    },
    h4: {
        color: '#000036',
        fontWeight: '700'
    },
    Avatar: {
        backgroundColor: '#000036 !important'
    }
}));

function SignUp() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://api-immersis.herokuapp.com/auth', {
            method: 'POST',
            body: JSON.stringify({
                firstName: data.UserName,
                lastName: 'Blaze',
                email: data.Email,
                password: data.Password,
                confirmPassword: data.ConfirmPassword
            }),
            headers: {
                'Content-Type': 'application/json'
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
                                        color: '#000036',
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                label="User Name"
                                margin="normal"
                                variant="standard"
                                placeholder="Enter Your UserName"
                                name="UserName"
                                inputRef={register({
                                    required: 'User Name is Required'
                                })}
                                error={errors.UserName}
                                helperText={errors.UserName?.message}
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
                                        color: '#000036',
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                variant="standard"
                                margin="normal"
                                label="Email"
                                placeholder="name@domain.com"
                                name="Email"
                                inputRef={register({
                                    required: 'Email is Required'
                                })}
                                error={errors.Email}
                                helperText={errors.Email?.message}
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
                                        color: '#000036',
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                name="Password"
                                inputRef={register({
                                    required: 'Password is Required'
                                })}
                                error={errors.Password}
                                helperText={errors.Password?.message}
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
                                        color: '#000036',
                                        fontFamily: "'Baloo Da 2', cursive"
                                    }
                                }}
                                margin="normal"
                                placeholder="Confirm Password"
                                variant="standard"
                                label="Confirm Password"
                                name="ConfirmPassword"
                                inputRef={register({
                                    required: 'Confirm Password is required'
                                })}
                                error={errors.ConfirmPassword}
                                helperText={errors.ConfirmPassword?.message}
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
            </Container>
        </Box>
    );
}

export default SignUp;
