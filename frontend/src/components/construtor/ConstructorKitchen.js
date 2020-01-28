import React, {Component} from 'react';
import {Card, Col, Collapse, Row} from 'antd';
import {GetUrlAC} from '../../redux/creators';
import {connect} from 'react-redux';
import ceramic_white from '../../img/kitchen/new2.effectsResult.effectsResult.png';

const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorKitchen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '100%',
      ceramic: ceramic_white,
      invert: "scale(-1,1)"
    }
  }

  render() {
    return (
    <div>
      <Row>
        <Col span={14}>
          <img key={'1'}
             style={{position: 'absolute', zIndex: '1',transform:`${this.state.invert}`}}
             src={this.state.ceramic}
             width={this.state.width}
             height={this.state.height}
             alt={'test'}
          />
        </Col>
        <Col span={10}>
          <Collapse accordion className={'card-input'}>
            <Panel header="Фартук из плитки" key="1">
              {this.props.storage.ceramic.map((elem, index) =>
                <Col key={index} span={11} style={{margin: 6}}>
                  <Card
                    onClick={(e) => this.setState({ceramic: elem.img})}
                    hoverable
                    style={{width: 215}}
                    cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                  </Card>
                </Col>
              )}
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>);
  }
}


function mapStateToProps(store) {
  return {
    storage: store.kitchenStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUrlAC: (data) => {
      dispatch(GetUrlAC(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorKitchen);