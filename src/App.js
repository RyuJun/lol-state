import React, { Component } from 'react';
import axios from 'axios';
import ViewSearchID from './components/ViewSearchID'
import ViewListWrapper from './components/ViewListWrapper'
import './css/App.css';

const apiDefault = {
  url : "https://kr.api.riotgames.com/lol",
  key : "RGAPI-4b3d4787-b483-40be-a4c7-52e2fe280f80",
  name : "hide on bush"
}

class App extends Component {
  state = {
    input: "",
    summoner : {},
    match : {},
    league : {}
  };

  getLOLData = () => {
    let summonerUrl, matchUrl, leagueUrl;

    summonerUrl = `${apiDefault.url}/summoner/v3/summoners/by-name/${apiDefault.name}?api_key=${apiDefault.key}`;
    axios.get(summonerUrl)
    .then( summonerData => {
      matchUrl = `${apiDefault.url}/match/v3/matchlists/by-account/${summonerData.data.accountId}?api_key=${apiDefault.key}`;    
      axios.get(matchUrl)
      .then( matchData => {
        leagueUrl = `${apiDefault.url}/league/v3/positions/by-summoner/${summonerData.data.id}?api_key=${apiDefault.key}`;
        axios.get(leagueUrl)
        .then( leagueData => {
          this.setState({
            summoner: summonerData.data,
            match : matchData.data,
            league : leagueData.data[0]
          })
        }).catch( error => console.log("Data가 없습니다."));    
      }).catch( error => console.log("Data가 없습니다."));
    }).catch( error => console.log("Data가 없습니다."));
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.getLOLData();
    }
  }
  render() {
    const { summoner, league, match } = this.state
    const { handleChange, handleKeyPress, getLOLData } = this
    const ListWrapper = summoner.id === undefined ? null : <ViewListWrapper summoner={summoner} league={league} match={match} />;

    return (
      <div className="App">
        <ViewSearchID 
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          getLOLData={getLOLData}
        />
        {ListWrapper}
      </div>
    );
  }
}

export default App;