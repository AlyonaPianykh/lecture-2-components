import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, createStyles } from "@material-ui/core";
import { MuiThemeProvider } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';

// const useStyles = makeStyles({
//     root: {
//         width: "200px",
//         padding: "10px 20px",
//         'max-height': '50px',
//         'background': '#ececec'
//     },
//     label: { "font-size": "14px", color: 'black'},
//     outlined: {
//         /* … */
//         '&$disabled': { /* … */ },
//         'border-color': 'blue'
//     },
//     outlinedPrimary: {
//         /* … */
//         '&:hover': { /* … */ },
//     },
//     disabled: {},
// }, { name: 'MuiButton' });
//
// export default function StyledButton() {
//     const classes = useStyles();
//
//     return (
//         <Button
//             classes={classes}
//             variant="outlined"
//         >
//             classes nesting
//         </Button>
//     );
// }

const myTheme = (parentTheme) => {
    return createMuiTheme({
        overrides: {
            MuiButton: createStyles({
                root: parentTheme.button.root,
                label: parentTheme.button.label
            })
        }
    });
}

export default function StyledButton() {
    const parentTheme = useTheme();

    return (
        <MuiThemeProvider theme={myTheme(parentTheme)}>
            <Button
                variant="outlined"
            >
                classes nesting
            </Button>
        </MuiThemeProvider>
    );
}