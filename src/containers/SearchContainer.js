import React from 'react';
//react component
import Search from './../components/Search.js';
import { connect } from 'react-redux';
// action dispatchers
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => ({ });

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleSearchChange(video))
  }
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;
