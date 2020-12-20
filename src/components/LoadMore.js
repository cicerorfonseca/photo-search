import React from 'react';

class LoadMore extends React.Component {
  render() {
    return (
      <div>
        <button
          className={`ui fluid button ${
            this.props.loading ? 'loading' : 'loaded'
          }`}
          onClick={this.props.onLoadMore}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default LoadMore;
