import { CardHeader, Card, Container, Typography, Grid, Paper, CardActionArea, CardMedia,CardContent,} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import colors from '../../colors';
const useStyles = makeStyles(() => ({
    title: {
        color: colors.primaryColor.color,

    }
}));


const OurServiceCard = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid direction="row"
                justifyContent="space-evenly"
                alignItems="center" container spacing={5} >
                <Grid >
                    <Paper varaint="outlined" elevation={20}>
                        <Card>
                            <CardHeader title="Lyrics" className={classes.title} align="center" />
                        </Card>
                        <CardActionArea>
                            <CardMedia component="img" image="https://i.imgur.com/2jou94m.png" />
                            <CardContent>
                                <Typography variant="h6" align="center">Songs stay with you when you
                                    sing along. <br></br>Follow along with the synchronized lyrics

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>
                <Grid >
                    <Paper varaint="outlined" elevation={20}>
                        <Card>
                            <CardHeader title="Music" className={classes.title} align="center" />
                        </Card>
                        <CardActionArea>
                            <CardMedia component="img" image="https://i.imgur.com/sZ4r356.png" />
                            <CardContent>
                                <Typography variant="h6" align="center">Listen to the songs you love, and
                                    <br></br>discover new music and
                                    podcasts.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>
                <Grid >
                    <Paper varaint="outlined" elevation={20}>
                        <Card>
                            <CardHeader title="Videos" className={classes.title} align="center" />
                        </Card>
                        <CardActionArea>
                            <CardMedia component="img" image="https://i.imgur.com/x49Akvg.png" />
                            <CardContent>
                                <Typography variant="h6" align="center">Music is more
                                    meaningful when<br></br>
                                    You wactch videos as
                                    well.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>

            </Grid>
        </Container >



    );
};
export default OurServiceCard;