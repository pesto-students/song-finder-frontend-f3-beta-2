import {
    Box,
    Container,
    Grid,
    Card,
    CardHeader,
    makeStyles
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSearches } from '../../utils/resource';

const useStyles = makeStyles(() => ({
    cardBack: {
        backgroundColor: '#89909c'
    },
    cardLink: {
        textDecoration: 'none'
    },
    errDiv: {
        margin: 'auto'
    }
}));

function Loading() {
    const classes = useStyles();
    return (
        <>
            {[...Array(12)].map(() => (
                <Grid item sm="3" md="3" xs="12">
                    <Card className={classes.cardBack}>
                        <Skeleton width="60%" />
                    </Card>
                </Grid>
            ))}
        </>
    );
}

function Error({ msg }) {
    const classes = useStyles();
    return <div className={classes.errDiv}>{msg}</div>;
}

function Searches({ search }) {
    const classes = useStyles();
    return (
        <Grid item sm="3" md="3" xs="12">
            <Link to={`/search?q=${search}`} className={classes.cardLink}>
                <Card className={classes.cardBack}>
                    <CardHeader title={search} />
                </Card>
            </Link>
        </Grid>
    );
}

function History({ loggedIn, allSearches, dispatch }) {
    const navigate = useNavigate();

    if (!loggedIn) {
        navigate('/');
        return null;
    }

    useEffect(() => dispatch(fetchSearches()), []);

    let elm;
    if (allSearches.loading) {
        elm = <Loading />;
    } else if (allSearches.error) {
        elm = <Error msg={allSearches.error} />;
    } else if (allSearches.searches.length === 0) {
        elm = <Error msg="No previous search results yet!" />;
    } else {
        elm = (
            <>
                {allSearches.searches.map((search) => (
                    <Searches search={search} />
                ))}
            </>
        );
    }

    return (
        <Box mt={15} mb={30}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {elm}
                </Grid>
            </Container>
        </Box>
    );
}

function mapStateToProps(state) {
    return { loggedIn: state.auth.loggedIn, allSearches: state.search };
}

const ConnectedHistory = connect(mapStateToProps)(History);

export default ConnectedHistory;
