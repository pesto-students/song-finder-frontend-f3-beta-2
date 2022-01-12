import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../colors';




const useStyles = makeStyles(() => ({
    inputRoot: {

        '& .MuiInput-underline:after': {
            borderBottom:  colors.borderSecondary.borderBottom,
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: colors.borderSecondary.borderBottombefore,
        }
    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto'
    },
    button: {
        backgroundColor: colors.primaryColor.color,
        color: '#fff',
        margin: '1rem 0',
        
    },
    h4: {
        color: colors.h4.textColor,
        fontWeight: '700'
    },
    Avatar: {
        backgroundColor: colors.iconColorSecondary.background
    },
    label: {
        fontFamily: '\'Baloo Da 2\', cursive !important'
    },
    Link: {
        color: colors.Link.linkColor,
        textDecoration: 'none !important'
    }

}));

const ForgotPassword = () => {
    const classes = useStyles();
    return (
        <Box sx={{ p: 1, mt: 15, mb: 30 }}>
            <Container maxWidth="lg">
                <Grid container>
                    <Paper elevation={20} className={classes.Paper} sx={{ p: 100 }} >
                        <Grid align="center">
                            <Avatar className={classes.Avatar}>
                                <LockOpenIcon />
                            </Avatar>
                            <Typography variant="h4" className={classes.h4}> Forgot Passsword</Typography>
                            <Typography variant="caption1">Please fill this form</Typography>
                        </Grid>
                        <form>
                            <TextField className={classes.inputRoot} fullWidth
                                inputProps={{ style: { fontFamily: '\'Baloo Da 2\', cursive ', } }}
                                InputLabelProps={{ style: { color: '#fd1863', fontFamily: '\'Baloo Da 2\', cursive' } }}
                                label="Email" margin="normal" variant="standard"
                                placeholder="Enter Your Registred Email" />


                            <Button type="submit" className={classes.button} fullWidth={true} variant="contained" color="secondary"
                            >Send</Button>

                            <Typography>Don&apos;t you Have an Account?
                                <Link to="/signup"  className={classes.Link} >
                                    Sign Up
                                </Link>
                            </Typography>


                        </form>
                    </Paper>
                </Grid>

            </Container>
        </Box >

    );
};

export default ForgotPassword;