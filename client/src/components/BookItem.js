import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  StylesProvider,
} from '@material-ui/core';

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

const BookItem = (props) => {
  const classes = useStyles();
  const { title, author, genre, read } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Reading
        </Typography>
        <Typography variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Book by {author}
        </Typography>
        <Typography color='textSecondary'>
          <b>Genre: </b> {genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Read</Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
