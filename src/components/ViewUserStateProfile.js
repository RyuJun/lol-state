import React,{ Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import champData from '../static-data/champ-static-data';
import '../css/ViewUserStateProfile.css';

class ViewUserStateProfile extends Component {
    render() {
        const { summoner, league, match, preferData  } = this.props;
        
        //let myRank, myVS, vsComment, preferDetailChamp;
       // switch (league.rank){ case "I" : myRank = 1; break; case "II" : myRank = 2; break; case "III" : myRank = 3; break; case "IV" : myRank = 4; break; case "V" : myRank = 5; break; default : myRank = "I"; }
        
        //myVS = Math.round((league.wins / (league.wins + league.losses))*100) ;

        
        // if(myVS > 80){ vsComment = "승률이 미쳤습니다!!!!! 대박!!!" }
        // else if(myVS > 60){ vsComment = "승률이 좋네요!! 부럽습니다!!" }
        // else if(myVS > 40){ vsComment = "승률이 보통이에요! 아직희망이 있어요..!" }
        // else if(myVS > 20){ vsComment = "승률이 많이 떨어지네요.. 분발하세요..." }
        // else if(myVS > 0){ vsComment = "승률이 사람 아니십니다.. 접으세요.." }
        
        return (
            <div className="card-block padding1em">
            <div className="col-sm-8">
                <div className="col-xs-4">
                    <div className="leftImgSection">
                        <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/>
                        <img src={`//opgg-static.akamaized.net/images/borders2/${league.tier.toLowerCase()}.png`} alt="ProfileImgBorder"/>
                        <span className="profileLevel" alt="UserLevel">{summoner.summonerLevel}</span>
                    </div>
                </div>    
                <div className="col-xs-4 tierTextArea">
                    <h4 className="card-title">{league.playerOrTeamName}</h4>
                    <p className="card-text">{league.leagueName}</p>
                    <p className="card-text">하잇!</p>
                    {/* <p className="card-text">{vsComment}</p> */}
                </div>
            </div>
                <div className="col-sm-4 text-center padding1em">
                    <p className="animateNumberAreaTitle">Rank MMR</p>
                    <div className="animateNumberArea text-center">
                        <AnimatedNumber 
                            component="span" 
                            default={0}
                            value={1332}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                color: '#333',
                                fontWeight:'bold',
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            
                            duration={300}
                        />
                    </div>
                </div>
            </div>
        );

    }
}

export default ViewUserStateProfile;