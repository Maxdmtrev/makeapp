import { Badge } from 'antd';
import React, {Component} from 'react';

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <a href="#">
      <Badge count={5}>
        <span className="head-example"/>
      </Badge>
    </a>
    )
  }
}

export default Badges