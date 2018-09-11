import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      images: []
    }
  }

  changeSearch(value) {
    this.setState({searchText: value})
  }

  search() {
    let {searchText} = this.state;
    let key = '69a879f5498d9f0aadfd8c9e93158d50';
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&safe_search=3&per_page=25&text=${searchText}&api_key=${key}`)
    .then(res => {
      console.log(res.data.photos.photo)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Flickr Image Search</h1>
        <input placeholder='search' onChange={e => this.changeSearch(e.target.value)}/>
        <button onClick={() => this.search()}>Search</button>
      </div>
    );
  }
}

export default App;
