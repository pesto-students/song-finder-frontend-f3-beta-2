import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Tooltip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SwitchVideoTwoToneIcon from '@mui/icons-material/SwitchVideoTwoTone';
import { CardHeader, Skeleton, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchLyrics } from '../../utils/resource';

const useStyles = makeStyles(() => ({
    // style for Mobile Responsive
    linkDiv: {
        color: 'red',
        position: 'relative',
        left: '16.45%'
    },
    resultLink: {
        color: 'red'
    },
    ta: {
        textAlign: 'center'
    }
}));

function Loading() {
    return (
        <Grid item xs={8} md={8} lg={8}>
            <Box>
                <Card variant="outlined">
                    <div>
                        <Skeleton width="30%" />
                        <Skeleton width="10%" />
                    </div>
                    <Skeleton variant="rectangular" height="30vh" />
                    <CardContent
                        style={{
                            fontSize: '10rem',
                            textAlign: 'center'
                        }}
                    >
                        <Skeleton variant="rectangular" height="50vh" />
                    </CardContent>
                </Card>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={1}
                    >
                        <Grid item>
                            <Tooltip>
                                <Skeleton
                                    variant="circular"
                                    height={40}
                                    width={40}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip>
                                <Skeleton
                                    variant="circular"
                                    height={40}
                                    width={40}
                                />
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardActions>
            </Box>
        </Grid>
    );
}

function SongLyrics({ artist, image, lyrics, trig, titleName = '' }) {
    const { trigger } = trig;
    return (
        <Grid item xs={8} md={8} lg={8}>
            <Box>
                <Card variant="outlined">
                    <CardHeader
                        avatar={
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <CopyAllIcon />
                            </IconButton>
                        }
                        title={titleName}
                        subheader={artist}
                    />
                    <CardMedia
                        component="img"
                        height="250vh"
                        image={image}
                        alt="Song Image"
                    />
                    <CardContent
                        style={{
                            backgroundColor: 'rgba(0, 0, 54, 0.8)',
                            fontSize: '10rem',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="body1"
                            style={{ color: '#fff', whiteSpace: 'pre-line' }}
                        >
                            {lyrics}
                        </Typography>
                    </CardContent>
                </Card>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                        spacing={10}
                    >
                        <Grid item>
                            <Tooltip title="Video" arrow>
                                <IconButton name="video" onClick={trigger}>
                                    <SwitchVideoTwoToneIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Audio" arrow>
                                <IconButton name="music" onClick={trigger}>
                                    <MusicNoteIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardActions>
            </Box>
        </Grid>
    );
}

function Lyrics({ lyricsResult, dispatch }) {
    const classes = useStyles();
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const titleName = params.get('title');
    const artist = params.get('artist');

    function trigger(e) {
        navigate({
            pathname: `/${e.currentTarget.name}`,
            search: `?title=${titleName}&artist=${artist}`
        });
    }

    if (titleName && artist) {
        useEffect(
            () => dispatch(fetchLyrics({ title: titleName, artist })),
            []
        );
    } else {
        useEffect(() => navigate('/'), []);
    }

    return (
        <Box mt={15}>
            <Container maxWidth="lg">
                {localStorage.getItem('recent') ? (
                    <Link
                        to={`/search?q=${localStorage.getItem('recent')}`}
                        className={classes.resultLink}
                    >
                        <div className={classes.linkDiv}>
                            <Typography>Back to Results</Typography>
                        </div>
                    </Link>
                ) : null}
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {lyricsResult.loading ? (
                        <Loading />
                    ) : lyricsResult.error ? (
                        <h3>{lyricsResult.error}</h3>
                    ) : (
                        <SongLyrics
                            titleName={titleName}
                            artist={artist}
                            image={lyricsResult.obj.image}
                            lyrics={lyricsResult.obj.lyrics}
                            trig={{ trigger }}
                        />
                    )}
                </Grid>
            </Container>
        </Box>
    );
}

function mapStateToProps(state) {
    return { lyricsResult: state.lyrics };
}

const ConnectedLyrics = connect(mapStateToProps)(Lyrics);

export default ConnectedLyrics;
