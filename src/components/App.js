import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const resp = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: resp.data.results });

    console.log(this.state.images);
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
