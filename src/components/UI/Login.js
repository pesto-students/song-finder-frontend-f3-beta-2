import { Container, FormControlLabel, Grid, Paper, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import { Box, TextField } from '@mui/material';
import { Checkbox } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from "@mui/material";
import { margin } from '@mui/system';
const useStyles = makeStyles((theme) => ({
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    },
    button: {
        backgroundColor: "#fd1863",
        color: "#fff",
        margin: "1rem 0"
    },
    h4: {
        color: "#fd1863"
    },
    Avatar: {
        backgroundColor: "#fd1863 !important"
    },
    label: {
        fontFamily: "'Baloo Da 2', cursive !important"
    }

}))

const Login = () => {
    const classes = useStyles();
    return (
        <Box sx={{ p: 1, mt: 10, mb: 5 }}>
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
                            <TextField fullWidth inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { fontFamily: "'Baloo Da 2', cursive" } }}
                                label="Name" margin="normal" variant="standard"
                                placeholder="Enter Your Name" />
                            <TextField fullWidth label="Password" variant="standard" placeholder="Enter your Password"
                                margin="normal" placeholder="Enter Your Password" inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }} InputLabelProps={{ style: { fontFamily: "'Baloo Da 2', cursive" } }} />
                            <FormControlLabel
                                value="Remember Me"
                                control={<Checkbox />}
                                label="Remember Me"
                                labelPlacement='I accept Terms and Condition'
                            />
                            <Button type="submit" className={classes.button} fullWidth={true} variant="contained" color="secondary"
                            >Log In</Button>
                            <Typography>
                                <Link> Forgot Password?</Link>
                            </Typography>
                            <Typography >Don't you Have an Account?
                                <Link href="#">
                                    Sign Up
                                </Link>
                            </Typography>


                        </form>
                    </Paper>
                </Grid>

            </Container>
        </Box>

    )
}

export default Login