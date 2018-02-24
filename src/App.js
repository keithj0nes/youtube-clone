import React from 'react';
import YTSearch from 'youtube-api-search';
import VideoSearch from './components/VideoSearch';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.VideoSearch('hockey')
  }


  VideoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[1]
      })
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <VideoSearch onSearchTermChange={(term) => {this.VideoSearch(term)}}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList />
      </div>
    );
  }
}

export default App;
