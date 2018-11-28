import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const API_KEY = '82cece643cde12e994e97d7b7e32aac5cc91b04cc0bf78aeff614f916d558e42';
class App extends React.Component {

  state = { images: [] }

   onSearchSubmit = async (term) => {
    const response =  await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px'}}> 
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;