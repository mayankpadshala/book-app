import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const hadleBooksClick = () => {
    history.push('/');
  };

  const hadleSearchClick = () => {
    history.push('/browse');
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size='small' onClick={hadleBooksClick}>
          My Books
        </Button>
        <Typography
          component='h2'
          variant='h4'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          Books App
        </Typography>
        <Button size='small' onClick={hadleSearchClick}>
          Browse Books
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

export default NavBar;
