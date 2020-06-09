import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, GridListTile, GridList, Typography } from '@material-ui/core';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchItem from './SearchItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '64px',
  },
  gridList: {
    padding: '32px',
  },
}));

const apiKey = 'sOH0vsACqOdhqFnFwCSbGw';

// Function to convert simple XML document into JSON.
// Loops through each child and saves it as key, value pair
// if there are sub-children, call the same function recursively on its children.
const XMLToJson = (XML) => {
  const allNodes = new Array(...XML.children);
  const jsonResult = {};
  allNodes.forEach((node) => {
    if (node.children.length) {
      jsonResult[node.nodeName] = XMLToJson(node);
    } else {
      jsonResult[node.nodeName] = node.innerHTML;
    }
  });
  return jsonResult;
};
const Search = (props) => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  // parse string xml received from goodreads api
  const parseXMLResponse = (response) => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, 'application/xml');
    const parseError = XMLResponse.getElementsByTagName('parsererror');

    if (parseError.length) {
      console.log('There was an error fetching results.');
    } else {
      const XMLresults = new Array(...XMLResponse.getElementsByTagName('work'));
      const searchResults = XMLresults.map((result) => XMLToJson(result));
      setBooks(searchResults);
    }
  };

  const getBooks = (searchText) => {
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

    axios
      .get(requestUri)
      .then((res) => {
        parseXMLResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.root}>
        <Typography
          component='h2'
          variant='h4'
          color='inherit'
          align='center'
          noWrap
          gutterBottom
        >
          Book Search from GoodReads
        </Typography>
        <SearchBar getBooks={getBooks} />
        <GridList
          cols={4}
          spacing={8}
          cellHeight={'auto'}
          className={classes.gridList}
        >
          {books.map((book) => (
            <GridListTile key={book.id}>
              <SearchItem
                title={book.best_book.title}
                genre=''
                author={book.best_book.author.name}
                read={false}
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    </React.Fragment>
  );
};

export default Search;
