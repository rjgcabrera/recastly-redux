import React from 'react';
//react component
import Search from './../components/Search.js';
import { connect } from 'react-redux';
// action dispatchers
import handleSearchChange from '../actions/search.js';
// do we need to import reducers?
// import videoListReducer from '../reducers/videoList.js';
// import currentVideoReducer from '../reducers/currentVideoReducer.js';

// var mapStateToProps = (state, ownProps) => {
//   return {
//     state: 
//   }
// };
// 
// var mapDispatchToProps = dispatch => {
//   return {
// 
//   }
// }

var mapStateToProps = (state) => ({ });

// var mapStateToProps = (state, ownProps) => {
//   return {
//     video: state.currentVideo
//   }
// };

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleSearchChange(video))
  }
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
