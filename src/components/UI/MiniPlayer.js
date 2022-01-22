import { makeStyles } from '@material-ui/styles';
import ReactPlayer from 'react-player/soundcloud';
import { Card, CardHeader, Skeleton } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    playerWrapper: {
        height: 65,
        [theme.breakpoints.down('sm')]: {
            height: 100
        }
    },
    errorMsg: {
        position: 'relative',
        margin: 'auto'
    }
}));

function Loading() {
    const classes = useStyles();
    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5
            }}
            className={classes.playerWrapper}
        >
            <BottomNavigation sx={{ justifyContent: 'start' }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        boxShadow: 'none'
                    }}
                >
                    <CardHeader
                        avatar={
                            <Skeleton
                                variant="circular"
                                height={35}
                                width={35}
                                animation="wave"
                            />
                        }
                        title={<Skeleton width={100} animation="wave" />}
                        subheader={<Skeleton width={200} animation="wave" />}
                    />
                </Card>
            </BottomNavigation>
        </Paper>
    );
}

function Audio() {
    const classes = useStyles();
    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5
            }}
            className={classes.playerWrapper}
        >
            <BottomNavigation sx={{ justifyContent: 'start' }}>
                <ReactPlayer
                    controls
                    playing
                    height={110}
                    width="98.9vw"
                    url={localStorage.getItem('audio')}
                />
            </BottomNavigation>
        </Paper>
    );
}

function Error() {
    const classes = useStyles();
    <Paper
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5
        }}
        className={classes.playerWrapper}
    >
        <BottomNavigation sx={{ justifyContent: 'start' }}>
            <div className={classes.errorMsg}>Error</div>
        </BottomNavigation>
    </Paper>;
}

function MinPLayer({ currentAudio }) {
    let elm;
    if (currentAudio.loading) {
        elm = <Loading />;
    } else if (currentAudio.error) {
        elm = <Error />;
    } else if (localStorage.getItem('audio')) {
        elm = <Audio />;
    } else {
        elm = null;
    }
    return <div>{elm}</div>;
}

function mapStateToProps(state) {
    return { currentAudio: state.audio };
}

const ConnectedMinPLayer = connect(mapStateToProps)(MinPLayer);

export { ConnectedMinPLayer as MinPLayer };
