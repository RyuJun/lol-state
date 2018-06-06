import React, { Component } from 'react';
import axios from 'axios';
import ViewSearchID from './components/ViewSearchID'
import './App.css';

const apiDefault = {
  url : "https://kr.api.riotgames.com/lol",
  key : "RGAPI-7f41163f-0f97-4f24-bf29-a60c9d773b2a",
  name : "류똥글"
}

class App extends Component {
  state = {
    input: "",
    summoner : {}
  };

  getLOLData = () => {
    let summonerUrl = `${apiDefault.url}/summoner/v3/summoners/by-name/${apiDefault.name}?api_key=${apiDefault.key}`;
    axios.get(summonerUrl)
    .then( summonerData => {
      this.setState({
        summoner : summonerData.data
      })
    }).catch( error => console.log("Data가 없습니다."));
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <ViewSearchID 
          onChange={this.handleChange}
          getLOLData={this.getLOLData}  
        />
      </div>
    );
  }
}

export default App;