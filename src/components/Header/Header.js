import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";
import React from "react";
import {CreateClass, JoinClass} from "..";
import { useStyles } from "./styles";
import { useLocalContext } from '../../context/context';

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setCreateClassDialog, setJoinClassDialog } = useLocalContext();

  const handleCreateDialog = () => {
    handleClose();
    setCreateClassDialog(true);
  }

  const handleJoinDialog = () => {
    handleClose();
    setJoinClassDialog(true);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6" className={classes.title}>
              Quizzatt
            </Typography>
          </div>
          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Apps className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
                <MenuItem onClick={handleJoinDialog}>Join class</MenuItem>
                <MenuItem onClick={handleCreateDialog}>Create class</MenuItem>
            </Menu>
            <div>
              <Avatar className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
