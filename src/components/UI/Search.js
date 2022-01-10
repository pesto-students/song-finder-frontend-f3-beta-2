import {
    Box, Card, CardActionArea,
    CardActions, CardContent, CardMedia, Grid, IconButton, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SwitchVideoTwoToneIcon from '@mui/icons-material/SwitchVideoTwoTone';
import { Container, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    Typography: {
        color: colors.primaryColor.color
    },
    icon: {
        backgroundColor: colors.iconColor.background,
        color: colors.iconColor.color,
        margin: ".5rem",
        "&:hover": {
            backgroundColor: colors.iconHoverColor.background,
            color: colors.iconHoverColor.color,
        }
    },

}))

const Search = () => {
    const classes = useStyles();
    return (
        <Box mt={15} mb={30} >
            <Container maxWidth="lg">
                <Grid container >
                    <Box mb={5}  >
                        <Grid item >
                            <Typography gutterBottom variant="h6" component="h6">Search Result for: "Rafta Rafta Sanam"</Typography>
                        </Grid>

                    </Box>

                </Grid>

                <Grid container spacing={4}>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img" image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg" />

                                <CardContent>
                                    <Typography variant="h5">Rafta Rafta Sanam</Typography>
                                    <Typography className={classes.Typography} variant="caption1"> T Series  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Divider />
                            <CardActions >
                                <Grid container direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline">
                                    <Grid item>


                                        <Tooltip className={classes.Tooltip} arrow title="Lyrics">
                                            <Link to="/lyrics">
                                                <IconButton className={classes.icon}>
                                                    <ReceiptTwoToneIcon />
                                                </IconButton>
                                            </Link>


                                        </Tooltip>


                                        <Tooltip arrow title="Audio">
                                            <IconButton className={classes.icon} >
                                                <MusicNoteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip arrow title="Video">
                                            <Link to="/video">
                                                <IconButton className={classes.icon}>
                                                    <SwitchVideoTwoToneIcon />
                                                </IconButton>
                                            </Link>


                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>


                    </Grid>


                </Grid>
            </Container>
        </Box>
    )
}

export default Search