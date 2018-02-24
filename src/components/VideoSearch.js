import React from 'react';

class VideoSearch extends React.Component {

  constructor(){
    super();

    this.state = { term: ""}
  }

  onSearchChange(term){
    this.setState({term})
  }

  submitSearch(e){
    e.preventDefault();
    this.props.onSearchTermChange(this.state.term)
  }

  render(){
    return (
      <div className="video-search">
        <form onSubmit={this.submitSearch.bind(this)}>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.onSearchChange(e.target.value)}/>
        </form>
      </div>
    )
  }
}

export default VideoSearch;
