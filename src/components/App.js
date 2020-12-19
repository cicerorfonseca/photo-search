import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import LoadMore from './LoadMore';

class App extends React.Component {
  state = {
    images: [],
    term: '',
    perPage: 10,
  };

  fetchUnsplashData = async (term) => {
    const resp = await unsplash.get('/search/photos', {
      params: { query: this.state.term, per_page: this.state.perPage },
    });

    this.setState({ images: resp.data.results });
  };

  onSearchSubmit = (term) => {
    if (this.state.term !== '') {
      if (this.state.term !== term) {
        this.setState({ term: term, perPage: 10 }, () => {
          this.fetchUnsplashData(this.state.term);
        });
      }
    } else {
      this.setState({ term: term }, () =>
        this.fetchUnsplashData(this.state.term)
      );
    }
  };

  onLoadMore = () => {
    let newPerPage = this.state.perPage + 10;

    this.setState({ perPage: newPerPage }, () =>
      this.fetchUnsplashData(this.state.term)
    );
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {this.state.images.length > 0 && (
          <LoadMore onLoadMore={this.onLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
