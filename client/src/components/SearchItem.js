import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    border: 'solid',
  },
  bullet: {
    margin: '0 0 6px 8px',
  },
}));

const SearchItem = (props) => {
  const classes = useStyles();
  const { title, author } = props;
  const [error, setError] = useState('');

  const addToMyBooks = (bookItem) => {
    const book = {
      title: bookItem.title,
      author: bookItem.author,
      genre: 'Fiction',
      read: false,
    };
    axios
      .post('http://localhost:5000/api/books', book)
      .then((res) => {
        if (res.status == 201) {
          setError('Added');
        } else {
          setError('Already Added');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='subtitle1' noWrap>
          {error ? error : title}
        </Typography>
        <Typography color='textSecondary' noWrap>
          {error ? `Book ${title}` : `Book by ${author}`}
        </Typography>
      </CardContent>
      <CardActions>
        {error ? (
          <Typography color='textSecondary' className={classes.bullet}>
            Book by {author}
          </Typography>
        ) : (
          <Button size='small' onClick={() => addToMyBooks(props)}>
            Add to Reading List
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default SearchItem;
