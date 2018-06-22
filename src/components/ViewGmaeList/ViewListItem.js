import React, { Component } from 'react';
import { GetGameData } from '../lib';
import axios from 'axios';
import ApiDefault from '../ApiDefault'
import '../../css/ViewListItem.css';

class ViewListItem extends Component {
    state = {
        toggle : false
    }
    handleToggleItem = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }
    render(){
        const { match } = this.props,
        gmaeData = new GetGameData(),
        toggleDetail = !this.state.toggle ? "toggleTeam-area" : "toggleTeam-area toggleTeam",
        champData = gmaeData.getChampData(match.champion),
        gmaeTime = gmaeData.getGameTime(match.timestamp),
        playLane = match.role === 'DUO_SUPPORT' && match.lane === 'BOTTOM' ? 'SUPPORT' : match.lane,
        laneObject = gmaeData.getLaneIconData(playLane)[0];
        let matchDetailItem;
        console.log(laneObject.miniStyle);
        
        //     let matchDetailUrl = `${ApiDefault.url}/match/v3/matches/${item.gameId}?api_key=${ApiDefault.key}`;
        //     axios.get(matchDetailUrl)
        //     .then( matchDetailData => {
        //         matchDetailItem = matchDetailData.data
        //     }).catch( error => console.log("Data가 없습니다."));
        return (
            <div className="gameList-area">
                <div className="item-champ-img">
                    <img src={`http://opgg-static.akamaized.net/images/lol/champion/${champData.key}.png?image=w_55&v=1`} />
                    {/* <div className="btn btn-success" onClick={this.handleToggleItem}>ToggleGO</div> */}
                </div>
                <div className="item-champ-name">
                    <h5 className="champName">{champData.name}</h5>
                    <h6 className="champTitle">{champData.title}</h6>
                </div>
                <div className="item-champ-lane">
                    <div className="champLane" style={laneObject.miniStyle}></div>
                    <h6 className="champLaneName">{laneObject.lane}</h6>
                </div>
                <div className="item-champ-timestamp">
                    <h6 className="gameTime">{gmaeTime}</h6>
                    <a className="badge badge-secondary">Season {match.season}</a>
                </div>
                <div className={toggleDetail}>안녕~</div>
            </div>
        );
    }
}
export default ViewListItem;

