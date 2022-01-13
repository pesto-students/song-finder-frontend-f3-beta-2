import {
    Avatar,
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
import SwitchVideoTwoToneIcon from '@mui/icons-material/SwitchVideoTwoTone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

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

function Video() {
    const classes = useStyles();
    return (
        <Box mt={15} align="center">
            <Container maxWidth="md">
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar>
                                <SwitchVideoTwoToneIcon />
                            </Avatar>
                        }
                        title="Rafta Rafta Sanam"
                        subheader="Atif Aslam"
                    />
                </Card>
                <div className={classes.videResponsive}>
                    <iframe
                        width="853"
                        height="480"
                        src="https://www.youtube.com/embed/rokGy0huYEA"
                        frameBorder="0"
                        allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture"
                        allowFullScreen
                        title="Embedded Youtube"
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
        </Box>
    );
}

export default Video;
