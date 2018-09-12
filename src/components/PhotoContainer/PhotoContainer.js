import React, {Component} from 'react';
import axios from 'axios';
import './PhotoContainer.css'

export default class PhotoContainer extends Component {
  constructor() {
    super();
    this.state = {
      nsid: ''
    }
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getinfo&api_key=69a879f5498d9f0aadfd8c9e93158d50&format=json&nojsoncallback=1&photo_id=${this.props.photoId}&secret=${this.props.secret}`)
    .then(res => {
      this.setState({nsid: res.data.photo.owner.nsid})
    })
  }

  render() {
    return (
    <div className='individualPhoto'>
      <a href={`https://www.flickr.com/photos/${this.state.nsid}/${this.props.photoId}`}><img alt='flickrPic' src={`https://farm${this.props.farmId}.staticflickr.com/${this.props.serverId}/${this.props.photoId}_${this.props.secret}_b.jpg`}/></a>
    </div>
  )
  }
}