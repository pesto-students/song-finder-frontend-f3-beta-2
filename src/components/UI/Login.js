import { Checkbox, Container, FormControlLabel, Grid, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    inputRoot: {

        "& .MuiInput-underline:after": {
            borderBottom: colors.border.borderBottom,
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: colors.border.borderBottombefore,
        }
    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    },
    button: {
        backgroundColor: colors.background.primaryButton,
        color: colors.fontColor.textColor,
        margin: "1rem 0",
        '&:hover': {
            backgroundColor: colors.background.hoverButtonColor,

        },

    },
    h4: {
        color: colors.h4.textColor,
        fontWeight: "700"
    },
    Avatar: {
        backgroundColor: "#fd1863 !important"
    },
    label: {
        fontFamily: "'Baloo Da 2', cursive !important"
    },
    Link: {
        color: Link.linkColor
    }

}))

const Login = () => {
    const classes = useStyles();
    return (
        <Box sx={{ p: 1, mt: 10, mb: 18 }}>
            <Container maxWidth="lg">
                <Grid container>
                    <Paper elevation={20} className={classes.Paper} sx={{ p: 100 }} >
                        <Grid align="center">
                            <Avatar className={classes.Avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography variant="h4" className={classes.h4}> Login</Typography>
                            <Typography variant="caption1">Please fill this form</Typography>
                        </Grid>
                        <form>
                            <TextField className={classes.inputRoot} fullWidth
                                inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }}
                                label="Name" margin="normal" variant="standard"
                                placeholder="Enter Your Name" />
                            <TextField className={classes.inputRoot}
                                fullWidth label="Password" variant="standard"
                                placeholder="Enter your Password"
                                margin="normal"
                                inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }} />
                            <FormControlLabel
                                value="Remember Me"
                                control={<Checkbox />}
                                label="Remember Me"
                                labelPlacement='I accept Terms and Condition'
                            />
                            <Button type="submit" className={classes.button} fullWidth={true} variant="contained" color="secondary"
                            >Log In</Button>
                            <Typography>
                                <Link color="#FF1700" underline="none" to="/forgotPassword" > Forgot Password?</Link>
                            </Typography>
                            <Typography >Don't you Have an Account?
                                <Link to={"/signup"} color="#000036" underline="none">
                                    Sign Up
                                </Link>
                            </Typography>


                        </form>
                    </Paper>
                </Grid>

            </Container>
        </Box >

    )
}

export default Login