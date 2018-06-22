import React, { Component } from 'react';
import ViewListItem from './ViewListItem';

class ViewListTemplate extends Component {
    
    render() {
      const { summoner, league, match } = this.props;
      const ViewListItems = match.matches.map((item, i) => <ViewListItem match={item} key={i}/> );
      return (
          <div className="tableWrapper col-md-12">
              {ViewListItems}
          </div>
      );
    }
}


export default ViewListTemplate;