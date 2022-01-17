import {
    Box,
    Card,
    CardActions,
    CardHeader,
    Container,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SwitchVideoTwoToneIcon from '@mui/icons-material/SwitchVideoTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player/soundcloud';
import { fetchAudio } from '../../utils/resource';

const useStyles = makeStyles(() => ({
    // style for Mobile Responsive
    audioResponsive: {
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

function AudioFrame({ audioURL, title, artist }) {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Card>
                <CardHeader title={title} subheader={artist} />
            </Card>
            <div className={classes.audioResponsive}>
                <ReactPlayer url={audioURL} height="50%" width="70%" />
            </div>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Tooltip title="Video" arrow>
                            <IconButton>
                                <SwitchVideoTwoToneIcon />
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

function Audio({ audioResult, dispatch }) {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const title = params.get('title');
    const artist = params.get('artist');

    if (title && artist) {
        useEffect(() => dispatch(fetchAudio({ title, artist })), []);
    } else {
        useEffect(() => navigate('/'), []);
    }

    return (
        <Box mt={15} align="center">
            {audioResult.loading ? (
                <h3>Loading</h3>
            ) : audioResult.error ? (
                <h3>{audioResult.error}</h3>
            ) : (
                <AudioFrame
                    audioURL={audioResult.url}
                    title={title}
                    artist={artist}
                />
            )}
        </Box>
    );
}

function mapStateToProps(state) {
    return { audioResult: state.audio };
}

const ConnectedAudio = connect(mapStateToProps)(Audio);

export default ConnectedAudio;
