import React, { Component } from 'react';
import axios from 'axios';


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
    };
  }

  componentDidMount() {
    const { channelId } = this.props;
    const apiKey = 'AIzaSyDiAPb1v1C7Pfm1C64VuoxKevSGcntQHoU';
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

    axios.get(url).then(response => {
      this.setState({ videoId: response.data.items[0].id.videoId })
    })
  }

  render() {
    const { videoId } = this.state;
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen>
      </iframe>
    );
  }
}

export default Video;
