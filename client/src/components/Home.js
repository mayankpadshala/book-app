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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
}));

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const getBooks = () => {
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
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleBookClick = (bookId, read) => {
    if (read) {
      axios
        .delete(`http://localhost:5000/api/books/${bookId}`)
        .then((res) => {
          getBooks();
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      axios
        .patch(`http://localhost:5000/api/books/${bookId}`, { read: true })
        .then((res) => {
          getBooks();
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const classes = useStyles();

  if (load) {
    return (
      <Paper elevation={0} className={classes.root}>
        <GridList
          cols={4}
          spacing={32}
          cellHeight={'auto'}
          className={classes.gridList}
        >
          {error ? (
            <Typography
              component='h6'
              variant='h6'
              color='inherit'
              align='center'
            >
              {error}
            </Typography>
          ) : (
            books.map((book) => (
              <GridListTile key={book._id} className={classes.gridList}>
                <BookItem
                  title={book.title}
                  genre={book.genre}
                  author={book.author}
                  read={book.read}
                  id={book._id}
                  handleBookClick={handleBookClick}
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
        <Typography component='h5' variant='h5' color='inherit' align='center'>
          Loading App...
        </Typography>
      </Paper>
    );
  }
};

export default Home;
