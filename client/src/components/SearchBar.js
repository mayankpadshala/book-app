import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.palette.divider}`,
    alignItems: 'center',
  },
  search: {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchIcon: {
    paddding: 0,
  },
}));
const SearchBar = (props) => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getBooks(searchKey);
  };
  return (
    <div className={classes.root}>
      <Paper
        component='form'
        className={classes.search}
        onSubmit={handleSubmit}
      >
        <InputBase
          onChange={handleChange}
          className={classes.input}
          placeholder='Search Books by title or author ... '
        />
        <IconButton
          type='submit'
          aria-label='search'
          className={classes.searchIcon}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
