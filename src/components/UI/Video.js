import {
    Box,
    Card,
    CardActions,
    CardHeader,
    Container,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import { Skeleton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchVideo } from '../../utils/resource';

const useStyles = makeStyles(() => ({
    // style for Mobile Responsive
    videResponsive: {
        overFlow: 'hidden',
        paddingBottom: ' 56.25%',
        position: 'relative',
        height: 0,
        '& iframe': {
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            position: 'absolute'
        }
    }
}));

function Loading() {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Skeleton width="30%" />
            <Skeleton width="10%" />
            <div className={classes.videResponsive}>
                <Skeleton variant="rectangular" height="78vh" width="67vw" />
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
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
            </div>
        </Container>
    );
}

function VideoFrame({ videoId, artist, trig, titleName = '' }) {
    const classes = useStyles();
    const { trigger } = trig;
    return (
        <Container maxWidth="md">
            <Card>
                <CardHeader title={titleName} subheader={artist} />
            </Card>
            <div className={classes.videResponsive}>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    height="50%"
                    width="70%"
                />
            </div>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Tooltip title="Audio" arrow>
                            <IconButton name="music" onClick={trigger}>
                                <MusicNoteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Lyrics" arrow>
                            <IconButton name="lyrics" onClick={trigger}>
                                <ReceiptTwoToneIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </CardActions>
        </Container>
    );
}

function Video({ videoResult, dispatch }) {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const titleName = params.get('title');
    const artist = params.get('artist');

    function trigger(e) {
        navigate({
            pathname: `/${e.currentTarget.name}`,
            search: `?title=${titleName}&artist=${artist}`
        });
    }

    if (titleName && artist) {
        useEffect(() => dispatch(fetchVideo(`${titleName} ${artist}`)), []);
    } else {
        useEffect(() => navigate('/'), []);
    }

    return (
        <Box mt={15} align="center">
            {videoResult.loading ? (
                <Loading />
            ) : videoResult.error ? (
                <h3>{videoResult.error}</h3>
            ) : (
                <VideoFrame
                    videoId={videoResult.id}
                    titleName={titleName}
                    artist={artist}
                    trig={{ trigger }}
                />
            )}
        </Box>
    );
}

function mapStateToProps(state) {
    return { videoResult: state.video };
}

const ConnectedVideo = connect(mapStateToProps)(Video);

export default ConnectedVideo;
