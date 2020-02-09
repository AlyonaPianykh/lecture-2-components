import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        root: theme.button.root,
        label: theme.button.label,
    }
});

const CustomButton = function () {
    const classes = useStyles();

    return (
        <button className={classes.root}>
            <div className={classes.label}> Click me </div>
        </button>
    );
}

export default CustomButton;