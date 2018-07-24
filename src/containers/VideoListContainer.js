import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videoList
  };
};

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleVideoListEntryTitleClick: (video) =>
      dispatch(changeVideo(video))
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
