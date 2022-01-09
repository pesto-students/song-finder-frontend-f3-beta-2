import { Container, FormControlLabel, Grid, Paper, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import Avatar from '@mui/material/Avatar';

import React from 'react'
import { Box, TextField } from '@mui/material';
import { Checkbox } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from "@mui/material";
import { margin } from '@mui/system';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const useStyles = makeStyles((theme) => ({
    inputRoot: {

        "& .MuiInput-underline:after": {
            borderBottom: "2px solid #FF1700"
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: "2px solid rgba(255, 23, 0, .7) !important"
        }
    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    },
    button: {
        backgroundColor: "#FF1700",
        color: "#fff",
        margin: "1rem 0",
        '&:hover': {
            backgroundColor: 'rgba(255, 23, 0, .9) !important',

        },

    },
    h4: {
        color: "#FF1700",
        fontWeight: "700"
    },
    Avatar: {
        backgroundColor: "#FF1700 !important"
    },
    label: {
        fontFamily: "'Baloo Da 2', cursive !important"
    },
    Link: {
        color: "#FF1700 !important"
    }

}))

const ForgotPassword = () => {
    const classes = useStyles();
    return (
        <Box sx={{ p: 1, mt: 15, mb: 20 }}>
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
                                inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive ", } }}
                                InputLabelProps={{ style: { color: "#FF1700", fontFamily: "'Baloo Da 2', cursive" } }}
                                label="Email" margin="normal" variant="standard"
                                placeholder="Enter Your Registred Email" />


                            <Button type="submit" className={classes.button} fullWidth={true} variant="contained" color="secondary"
                            >Send</Button>

                            <Typography >Don't you Have an Account?
                                <Link href="/signup" color="#000036" underline="none">
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

export default ForgotPassword