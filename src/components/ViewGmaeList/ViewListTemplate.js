import React, { Component } from 'react';
import ViewListItem from './ViewListItem';
import '../../css/ViewListTemplate.css';

class ViewListTemplate extends Component {
    render() {
      const { summoner, league, match, getPreferData } = this.props;
      const ViewListItems = <ViewListItem />
      return (
          <div className="tableWrapper col-md-12">
              {ViewListItems}
          </div>
      );
    }
}


export default ViewListTemplate;