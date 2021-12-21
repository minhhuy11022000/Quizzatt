import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from 'react';
import { useStyle } from './styles';

const Header = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar className={classes.toolbar}></Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
