import { Grid, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: colors.secondaryColor,
        maxWidth: '100vw',
        padding: '3rem 3rem 20vh',
        marginTop: '3rem',
        direction: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '1rem 1rem 15vh',
            marginTop: '1rem',
            direction: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    Heading: {
        color: colors.primaryColor,
        fontSize: '2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem'
        }
    },
    link: {
        color: colors.whiteColor,
        fontSize: '1.5rem',
        wordWrap: 'break-word',
        [theme.breakpoints.down('md')]: {
            fontSize: '.4rem'
        }
    }
}));

function Footer() {
    const classes = useStyles();
    const location = useLocation();

    if (
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/forgotPassword' ||
        location.pathname === '/reset'
    ) {
        return null;
    }
    return (
        <Grid container className={classes.footer}>
            <Grid item spacing={10}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.Heading} variant="h5">
                            About Us
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Presenting you Immersis, where you <br /> can find
                            your music, videos and lyrics
                            <br /> all in one place.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item spacing={10}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h5" className={classes.Heading}>
                            Our Company
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Privacy and Policy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Terms & Condition
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Sitemap
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item spacing={10}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.Heading} variant="h5">
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Email: info@immmersis.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Phone: +91 7006064XXX
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.link}
                            variant="subtitle1"
                        >
                            Location: Delhi Ncr, india
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;
