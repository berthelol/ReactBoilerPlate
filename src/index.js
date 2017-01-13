import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list'
import YTsearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const Youtube_Api_Key = "AIzaSyA6Z10AWPS0W9W-V_IK6YxmH8-kdxwdrfE";

class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            videos: [],
            selected_video: null
        };
        this.videosearch('abeille');
    }
    videosearch(term)
    {
      YTsearch({
          key: Youtube_Api_Key,
          term: term
      }, (videos) => {
          this.setState({videos: videos, selected_video: videos[0]});
      });
    }
    render() {
      const videoSearch = _.debounce((term) => {this.videosearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTerm={videoSearch}/>
                <VideoDetail video={this.state.selected_video}/>
                <VideoList videos={this.state.videos} onVideoSelect={selected_video => this.setState({selected_video})}/>
            </div>
        );
    }
}

ReactDOM.render(< App / >, document.querySelector('.container'));
