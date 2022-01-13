import {
    Box,
    Container,
    Grid,
    Card,
    CardHeader,
    CardMedia
} from '@material-ui/core';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import colors from '../../colors';

function History() {
    return (
        <Box mt={15} mb={30}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item sm="3" md="3" xs="12">
                        <Card>
                            <CardHeader
                                title="Rafta Rafta"
                                subheader="T series"
                                action={
                                    <IconButton>
                                        <CancelIcon
                                            sx={{
                                                color: colors.primaryColor.color
                                            }}
                                        />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                component="img"
                                image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item sm="3">
                        <Card>
                            <CardHeader
                                title="Rafta Rafta"
                                subheader="T series"
                                action={
                                    <IconButton>
                                        <CancelIcon
                                            sx={{
                                                color: colors.primaryColor.color
                                            }}
                                        />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                component="img"
                                image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item sm="3">
                        <Card>
                            <CardHeader
                                title="Rafta Rafta"
                                subheader="T series"
                                action={
                                    <IconButton>
                                        <CancelIcon
                                            sx={{
                                                color: colors.primaryColor.color
                                            }}
                                        />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                component="img"
                                image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item sm="3">
                        <Card>
                            <CardHeader
                                title="Rafta Rafta"
                                subheader="T series"
                                action={
                                    <IconButton>
                                        <CancelIcon
                                            sx={{
                                                color: colors.primaryColor.color
                                            }}
                                        />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                component="img"
                                image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default History;
