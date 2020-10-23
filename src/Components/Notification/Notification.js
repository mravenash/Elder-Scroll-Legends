import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import style from './style.js'

const Notification = (props) => {
    const { type, message, title, classes } = props;
    return (<Alert severity={type} className={classes.alertContainer}>
        <AlertTitle>{title}</AlertTitle>
        <strong>{message}</strong>
    </Alert>)
}

export default withStyles(style)(Notification);