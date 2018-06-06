import React, { Component } from 'react';

class ViewSearchID extends Component {
    render() {
      const { onChange, getLOLData } = this.props
      return (
        <div>
          <input placeholder="ID를 입력해주세요" onChange={onChange}/>
          <button tpye="submit" onClick={getLOLData}>검색</button>
        </div>
      );
    }
}


export default ViewSearchID;