import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import style from './style.js'
import PropTypes from 'prop-types';

const Notification = (props) => {
    const { type, message, title, classes } = props;
    return (<Alert severity={type} className={classes.alertContainer}>
        <AlertTitle>{title}</AlertTitle>
        <strong>{message}</strong>
    </Alert>)
}

Notification.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    title: PropTypes.string
};


export default withStyles(style)(Notification);