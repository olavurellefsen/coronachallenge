import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';


const Streaming = () => {
  return <ContainerStyle><YouTube videoId={`${process.env.REACT_APP_X_VIDEO_ID}`} opts={{
    height: '800',
    width: '840',
    position:'relative',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },

  }} /></ContainerStyle>;
};

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Streaming;
