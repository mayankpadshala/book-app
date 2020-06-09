import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
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
  const { title, author, genre, read, id, handleBookClick } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {read ? 'Finished Reading' : 'Reading'}
        </Typography>
        <Typography variant='h6' component='h2' noWrap>
          {title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Book by {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => handleBookClick(id, read)}>
          {read ? 'Delete' : 'Read'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
