import React, { useState, useEffect } from 'react';
import { GridList, GridListTile, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookItem from './BookItem';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '16px',
  },
  gridList: {
    justifyContent: 'center',
    minWidth: '75%',
  },
}));

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  //useEffect
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/books')
      .then((res) => {
        setBooks(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  const classes = useStyles();

  if (load) {
    return (
      <Paper elevation={0} className={classes.root}>
        <GridList
          cols={4}
          spacing={32}
          className={classes.gridList}
          cellHeight={'auto'}
        >
          {error ? (
            <Typography
              component='h5'
              variant='h5'
              color='inherit'
              align='center'
              noWrap
              className={classes.toolbarTitle}
            >
              {error}
            </Typography>
          ) : (
            books.map((book) => (
              <GridListTile key={book._id}>
                <BookItem
                  title={book.title}
                  genre={book.genre}
                  author={book.author}
                  read={book.read}
                />
              </GridListTile>
            ))
          )}
        </GridList>
      </Paper>
    );
  } else {
    return (
      <Paper elevation={0} className={classes.root}>
        <Typography
          component='h5'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          Loading App...
        </Typography>
      </Paper>
    );
  }
};

export default Home;
