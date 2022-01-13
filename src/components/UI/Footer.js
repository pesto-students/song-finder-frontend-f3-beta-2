import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: '#000036',
        maxWidth: '100vw',
        padding: '3rem',
        marginTop: '3rem'
    },
    Heading: {
        color: '#fd1863'
    },
    link: {
        color: '#fff',
        fontSize: '1.5rem'
    }
}));
function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                sm={12}
            >
                <Grid item spacing={2}>
                    <Grid
                        container
                        direction="column"
                        style={{ overFlowWrap: 'break-word' }}
                    >
                        <Grid item className={classes.Heading}>
                            <Typography variant="h3">About Us</Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.link}
                                variant="subtitle1"
                            >
                                Presenting you Immersis, where you <br /> can
                                find your music, videos and lyrics
                                <br /> all in one place.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item spacing={2}>
                    <Grid container direction="column">
                        <Grid item className={classes.Heading}>
                            <Typography variant="h3">Our Company</Typography>
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
                <Grid item spacing={2}>
                    <Grid container direction="column">
                        <Grid item className={classes.Heading}>
                            <Typography variant="h3">Contact Us</Typography>
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
        </footer>
    );
}

export default Footer;
