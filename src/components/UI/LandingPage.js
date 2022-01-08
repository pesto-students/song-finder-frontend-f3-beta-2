import React from 'react'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to right bottom,  rgba(0, 0, 54, 0.90),rgba(253, 24, 99, 0.80)), url('https://i.imgur.com/K3wMWeK.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: "0px",
    }
}))

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>


        </div>
    )
}

export default LandingPage