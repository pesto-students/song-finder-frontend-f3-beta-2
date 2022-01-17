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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
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

function VideoFrame({ videoId, title, artist }) {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Card>
                <CardHeader title={title} subheader={artist} />
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
                            <IconButton>
                                <MusicNoteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Lyrics" arrow>
                            <IconButton>
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
    const title = params.get('title');
    const artist = params.get('artist');

    if (title && artist) {
        useEffect(() => dispatch(fetchVideo(`${title} ${artist}`)), []);
    } else {
        useEffect(() => navigate('/'), []);
    }

    return (
        <Box mt={15} align="center">
            {videoResult.loading ? (
                <h3>Loading</h3>
            ) : videoResult.error ? (
                <h3>{videoResult.error}</h3>
            ) : (
                <VideoFrame
                    videoId={videoResult.id}
                    title={title}
                    artist={artist}
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
