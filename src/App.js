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
      selectedVideo: null,
      searchTerms: [
        'hockey', 'soccer', 'baseball', 'comedy', 'olympics', 'subaru'
      ]
    }

    const newTerm = this.state.searchTerms[Math.floor(Math.random() * this.state.searchTerms.length)]
    this.VideoSearch(newTerm)
  }


  VideoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[Math.floor(Math.random() * videos.length)]
      })
    })
  }

  render() {
    return (
      <div className="container">
        <VideoSearch onSearchTermChange={(term) => {this.VideoSearch(term)}}/>
        <div className="row">
          <VideoDetails video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}}/>
        </div>
      </div>
    );
  }
}

export default App;
