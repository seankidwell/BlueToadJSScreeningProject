import React, { Component } from 'react';
import PhotoContainer from './components/PhotoContainer/PhotoContainer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      images: []
    }
    this.baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&safe_search=1&per_page=25'
  }

  changeSearch(value) {
    this.setState({searchText: value})
  }

  search = async () => {
    let {searchText} = this.state;
    let key = '69a879f5498d9f0aadfd8c9e93158d50';
    await axios.get(`${this.baseUrl}&text=${searchText}&api_key=${key}`)
    .then(res => {
      console.log(res.data.photos.photo)
      this.setState({images: res.data.photos.photo})
    })
    window.scrollTo(0,0);
  }

   enterKeyPress(e){
      if(e.keyCode === 13){
         this.search();
      }
   }

  render() {

    let photos = this.state.images.map((photo, i) => {
      let {farm, server, id, secret} = photo
      return (
        <PhotoContainer key={i} farmId={farm} serverId={server} photoId={id} secret={secret}/>
      )
    })

    return (
      <div className="App">
        <div className='searchArea'>
          <div className='title'>Flickr Image Search</div>
          <div>
            <input placeholder='search' onChange={e => this.changeSearch(e.target.value)} onKeyDown={e => this.enterKeyPress(e)}/>
            <button onClick={this.search}>Search</button>
          </div>
        </div>
        <div>
          {photos}
        </div>
      </div>
    );
  }
}

export default App;
