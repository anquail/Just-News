import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import UserContext from '../contexts/UserContext';

const useStyles = makeStyles({
  menuButton: {
    color: 'white',
  },
  title: {
    color: 'white',
  },
  appBar: {
    backgroundColor: '#17706c',
  },
  button: {
    marginLeft: '80%',
  },
});

export default function NavBar(props) {
  const classes = useStyles(props);
  const user = useContext(UserContext);
  const button = {
    url: user ? '/api/logout' : '/auth/google',
    text: user ? 'Logout' : 'Login',
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {user ? (
            <div>
              {' '}
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon className={classes.menuButton} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose} href={button.url}>
                  {button.text}
                </MenuItem>
              </Menu>
            </div>
          ) : null}
          <Typography variant="h6" className={classes.title}>
            Newzies
          </Typography>
          <Button color="inherit" className={classes.button} href={button.url}>
            {button.text}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
