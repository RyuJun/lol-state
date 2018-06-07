import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import '../css/ViewUserState.css';
import 'react-circular-progressbar/dist/styles.css';

class ViewUserState extends Component {
    render() {
        const { summoner, league } = this.props;
        const imgStyle = {
            backgroundImage: `url('//opgg-static.akamaized.net/images/borders2/${league.tier.toLowerCase()}.png')`,
            backgroundSize: "100% 100%"
        };
        let myRank, myVS, vsComment;
        switch (league.rank){ case "I" : myRank = 1; break; case "II" : myRank = 2; break; case "III" : myRank = 3; break; case "IV" : myRank = 4; break; case "V" : myRank = 5; break; default : myRank = "I"; }
        myVS = Math.round((league.wins / (league.wins + league.losses))*100) ;
        if(myVS > 80){ vsComment = "승률이 미쳤습니다!!!!!... 대박..!!!" }
        else if(myVS > 60){vsComment = "승률이 좋네요!! 부럽습니다..!!"}
        else if(myVS > 40){vsComment = "승률이 보통이에요! 아직희망이 있어요!"}
        else if(myVS > 20){vsComment = "승률이 많이 떨어지네요.. 분발하세요.."}
        else if(myVS > 0){vsComment = "승률이 사람새끼 아니십니다.. 접으세요.."}
        
        return (
            <div className="topProfileStateWrapper col-md-12">
                <div className="col-sm-12 nopadding">
                    <div className="card col-sm-12 text-left">
                        <div className="card-block col-md-12 padding1em">
                            <div className="col-xs-4">
                                <div className="leftImgSection" style={imgStyle}>
                                    <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/><br/>
                                    <span className="profileLevel">{summoner.summonerLevel}</span>
                                </div>
                            </div>    
                            <div className="col-xs-8 tierTextArea">
                                <h4 className="card-title">{league.playerOrTeamName}</h4>
                                <p className="card-text">{league.leagueName}</p>
                                <p className="card-text">{vsComment}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12 padding1em">
                            <div className="col-sm-4 text-center">
                                <div className="tierImg">
                                    <img src={`//opgg-static.akamaized.net/images/medals/${league.tier.toLowerCase()}_${myRank}.png`} alt="ProfileImg"/><br/>
                                </div>
                            </div>   
                            <div className="col-sm-4 text-center padding1em">
                                <h6>{league.tier} {league.rank}</h6>
                                <p><b>{league.leaguePoints} P</b> / {league.wins}승 {league.losses}패 {myVS}%</p>
                            </div>   
                            <div className="col-sm-4 circularProgressbarStyle text-center">
                                <CircularProgressbar percentage={myVS} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default ViewUserState;