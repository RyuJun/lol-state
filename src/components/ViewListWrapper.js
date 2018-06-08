import React, { Component } from 'react';
import ViewUserState from './ViewUserState'
import '../css/ViewListWrapper.css';

class ViewListWrapper extends Component {
    render() {
      const { summoner, league, match } = this.props;
      return (
        <div className="viewListWrapper col-md-12">
          <ViewUserState summoner={summoner} league={league} match={match} />
        </div>
      );
    }
}


export default ViewListWrapper;