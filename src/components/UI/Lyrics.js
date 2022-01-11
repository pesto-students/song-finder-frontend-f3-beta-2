import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { CardHeader, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';


const Lyrics = () => {
    return (
        <Box mt={15}>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid xs={12} sm={10} md={6} lg={6}>
                        <Box pt={3}>
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
                                    title="Rafta Rafta Sanam"
                                    subheader="Atif Aslam"
                                />
                                <CardMedia
                                    component="img"
                                    height="auto"

                                    image="https://img.youtube.com/vi/B-J_PuEhyOM/maxresdefault.jpg"
                                    alt="Song Image"
                                />
                                <CardContent style={{
                                    backgroundColor: 'rgba(0, 0, 54, 0.8)', fontSize: '10rem'
                                }}>
                                    <Typography gutterBottom variant="body1" style={{ color: '#fff' }}>
                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                        Pehle Jaan Phir Jaan-e-jaan Phir Jaan-e-jaana Ho Gaye

                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                        Deen-ba-deen Badhti Gayi Iss Husn Ki Ronaiya

                                        Pehle Gul Phir Gulbadan Phir Gulbadama Ho Gaye

                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                        Aap Tou Nazdik Se Nazdik-tar Aate Gaye

                                        Pehle Dil Phir Dilruba Phir Dil Ke Mehman Ho Gaye

                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                        Pyaar Jab Haad Se Badha Saare Taqalloufh Mit Gaye

                                        Aapse Phir Tum Houe Phir Tu Ka Unwan Ho Gaye

                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                        Pehle Jaan Phir Jaan-e-jaan Phir Jaan-e-jaana Ho Gaye

                                        Rafta Rafta Wo Meri Hasti Ka Saman Ho Gaye

                                    </Typography>
                                </CardContent>

                            </Card>
                        </Box>


                    </Grid>
                </Grid>
            </Container >
        </Box>

    );
};
export default Lyrics;