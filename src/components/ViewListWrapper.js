import React, { Component } from 'react';
import ViewUserState from './ViewUserState'
import '../css/ViewListWrapper.css';

class ViewListWrapper extends Component {
    render() {
      const { summoner, league, match } = this.props;
      console.log(match);
      return (
        <div className="viewListWrapper col-md-12">
          <ViewUserState summoner={summoner} league={league}/>
        </div>
      );
    }
}


export default ViewListWrapper;