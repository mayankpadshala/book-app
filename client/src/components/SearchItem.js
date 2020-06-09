import React from 'react';
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
    minWidth: 275,
    border: 'solid',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

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
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const SearchItem = (props) => {
  const classes = useStyles();
  const { title, author } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='subtitle1' noWrap>
          {title}
        </Typography>
        <Typography color='textSecondary'>Book by {author}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => addToMyBooks(props)}>
          Add to Reading List
        </Button>
      </CardActions>
    </Card>
  );
};

export default SearchItem;
