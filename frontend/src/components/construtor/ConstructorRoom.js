import React, {Component} from 'react';
import { Card, Col, Collapse, Row} from 'antd';
import {GetUrlAC} from '../../redux/creators';
import {connect} from 'react-redux';
import wall_base from '../../img/construct/wall_base.png';
import wall_default from '../../img/construct/wall_default.png';
import paint from '../../img/construct/paint.png';
import floor from '../../img/room/floor_base.png';
import floor1 from '../../img/room/floor_1.png'

const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorRoom extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '400px',
      height: '400px',
      wall: wall_base,
      wall1: wall_default,
      paint: paint,
      changeColor: 'black',
      floor: floor,
      floorChange: floor1
    };
  }

  onClick = () => {
    this.setState({
      changeColor: 'red'
    })
  }

  render () {
    const {cardImage, cardTitle, cardText} = this.props;
    return (
      <div>
      <Row>
        <Col span={14}>
          <img key={'1'}
               style={{position: 'absolute', zIndex: '2'}}
               src={this.state.wall}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
          <img key={'2'}
               style={{position: 'absolute', zIndex: '3'}}
               src={this.state.wall1}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
          <img key={'3'}
               style={{position: 'absolute', zIndex: '4'}}
               src={this.state.paint}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}

          />
          <img key={'4'}
               style={{position: 'absolute', zIndex: '4', opacity: '0.5', background: `${this.state.changeColor}`}}
               src={this.state.floor}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}

          />
          {this.props.storage ?
            <div>
          {this.props.storage.srcDef.map((elem, index) =>
            <img key={index}
                 style={{position: 'absolute', zIndex: elem.zIndex}}
                 src={elem.img}
                 width={'400'}
                 alt={'test'}
                 height={'400px'}
                  />
          )}
            </div>
          : '...Load'}
        </Col>
        <Col span={10}>
          <Collapse accordion className={'card-input'}>
            <Panel header="Стены" key="0">
              {this.props.storage.colorWall.map((elem,index)=>
                <Col key={index} span={11} style={{margin: 6}}>
                  <Card
                    onClick={(e) =>
                    {
                      this.setState({changeColor: elem.background})
                    }}
                    hoverable
                    style={{width: 235, background: elem.background}}
                    // cover={<img alt="example" src={elem.img}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                  </Card>
                </Col>
              )}
            </Panel>

            <Panel header="Пол" key="1">
              {this.props.storage.srcSample.map((elem,index)=>
              <Col key={index} span={11} style={{margin: 6}}>
               <Card
                onClick={(e) => this.setState({floor: elem.img})}
                hoverable
                style={{width: 235}}
                cover={<img alt="example" src={elem.sampleImage}/>}
               >

                 <Meta title={elem.title} description={elem.descript}/>
               </Card>
              </Col>
              )}
            </Panel>

            <Panel header="Двери" key="3">
              {this.props.storage.srcDoor.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={(e) => console.log(e.target)}
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



function mapStateToProps (store) {
  return {
    storage: store.constStore,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addUrlAC: (data) => {
      dispatch (GetUrlAC (data));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ConstructorRoom);