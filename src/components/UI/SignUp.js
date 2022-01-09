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
import { createTheme } from './Theme'

const useStyles = makeStyles((theme) => ({

    inputRoot: {

        "& .MuiInput-underline:after": {
            borderBottom: "2px solid #000036"
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: "2px solid #000036 !important"
        }
    },
    hover: {

    },
    Paper: {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    },
    button: {


        backgroundColor: "#000036",
        color: "#fff",
        margin: "1rem 0",
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 54, .9) !important',

        },

    },
    h4: {
        color: "#000036"
    },
    Avatar: {
        backgroundColor: "#000036 !important"
    },


}))

const SignUp = () => {
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
                            <Typography variant="h4" className={classes.h4}> Sign Up</Typography>
                            <Typography variant="caption1">Please fill this form</Typography>
                        </Grid>
                        <form>
                            {/* UserName Field */}
                            <TextField className={classes.inputRoot} fullWidth inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }}
                                label="UserName" margin="normal" variant="standard"
                                placeholder="Enter Your UserName" />

                            {/* Email field */}
                            <TextField className={classes.inputRoot}
                                fullWidth inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }}
                                variant="standard" margin="normal" label="Email" placeholder="name@domain.com" />

                            {/* Password Field */}
                            <TextField className={classes.inputRoot} fullWidth label="Password" variant="standard" placeholder="Enter your Password"
                                margin="normal" placeholder="Enter Your Password" inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }} InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }} />

                            <TextField className={classes.inputRoot} fullWidth
                                inputProps={{ style: { fontFamily: "'Baloo Da 2', cursive " } }}
                                InputLabelProps={{ style: { color: "#000036", fontFamily: "'Baloo Da 2', cursive" } }}
                                margin="normal" placeholder="Confirm Password" variant="standard" label="Confirm Password" />
                            <FormControlLabel
                                value=""
                                control={<Checkbox />}
                                label="I accept Terms and Condition"
                                labelPlacement="I Accept Terms and Condition"
                            />
                            <Button className={classes.hover} type="submit"
                                className={classes.button}
                                fullWidth={true}
                                variant="contained"
                                color="primary" >Sign Up</Button>

                        </form>
                    </Paper>
                </Grid>

            </Container>
        </Box>

    )
}

export default SignUp