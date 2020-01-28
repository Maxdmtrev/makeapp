import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Carousel } from 'antd';

import imgElegant from "../../img/preset/elegant-white.png";
import imgClassic from "../../img/preset/exquisite-classic.png";
import imgPeach from "../../img/preset/peach-dreams.png";
// import imgVivaro from "../../img/preset/vivaro-alpine.png";
import imgCaramel from "../../img/preset/cold-caramel.png"


class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: imgElegant,
      img1: imgCaramel,
      img2: imgClassic,
      img3: imgPeach,
      width: '100%',
      height: '700px'
    }
  }

  render() {
    return (
        <Carousel autoplay style={{minWidth: '100%', minHeight: '500px'}}>
          <div>
            <img key={'1'}
                 src={this.state.img}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
          </div>
          <div>
            <img key={'2'}
                 src={this.state.img1}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
          </div>
          <div>
            <img key={'3'}
                 src={this.state.img2}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
          </div>
          <div>
            <img key={'4'}
                 src={this.state.img3}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
          </div>
        </Carousel>
    );
  };
}

  function mapStateToProps(store) {
  return {
    storage: store.bathStore
  };
}

export default connect(mapStateToProps)(Slider);
