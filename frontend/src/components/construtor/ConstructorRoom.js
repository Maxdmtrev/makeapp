import React, {Component} from 'react';
import {Card, Col, Collapse, Row} from 'antd';
import {GetUrlAC} from '../../redux/creators';
import {connect} from 'react-redux';
import wall_base from '../../img/construct/wall_base.png';
import wall_default from '../../img/construct/wall_default.png';
import paint from '../../img/construct/paint.png';
import floor from '../../img/room/floor_base.png';
import door from '../../img/room/door/glanta-white.png';
import plint from '../../img/room/plint/curved_white.png';
import molding from '../../img/room/molding/molding_simple.png';
import podium from '../../img/room/sill/light_wood.png';
import lamp from '../../img/room/light/lightstar.png';
import energy from '../../img/room/electric/legrand.png';

const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorRoom extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '800px',
      height: '600px',
      wall: wall_base,
      wall1: wall_default,
      paint: paint,
      changeColor: 'black',
      floor: floor,
      door: door,
      plint: plint,
      molding: molding,
      podium: podium,
      lamp: lamp,
      energy: energy,
      invert: "scale(-1,1)"
    }
  }

  render () {
    return (
      <div>
      <Row>
        <Col span={14}>
          <img key={'1'}
               style={{position: 'absolute', zIndex: '2',transform:`${this.state.invert}`}}
               src={this.state.wall}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
          <img key={'2'}
               style={{position: 'absolute', zIndex: '3',transform:`${this.state.invert}`}}
               src={this.state.wall1}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
          <img key={'3'}
               style={{position: 'absolute', zIndex: '4',opacity: '0.5',transform:`${this.state.invert}`, background: `${this.state.changeColor}`}}
               src={this.state.paint}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}

          />
          <img key={'4'}
               style={{position: 'absolute', zIndex: '5',transform:`${this.state.invert}` }}
               src={this.state.floor}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}

          />
          <img key={'5'}
               style={{position: 'absolute', zIndex: '9' ,transform:`${this.state.invert}` }}
               src={this.state.door}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          <img key={'6'}
               style={{position: 'absolute', zIndex: '8' ,transform:`${this.state.invert}` }}
               src={this.state.plint}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          <img key={'7'}
               style={{position: 'absolute', zIndex: '8',transform:`${this.state.invert}`  }}
               src={this.state.molding}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          <img key={'8'}
               style={{position: 'absolute', zIndex: '10' ,transform:`${this.state.invert}` }}
               src={this.state.podium}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          <img key={'9'}
               style={{position: 'absolute', zIndex: '8' ,transform:`${this.state.invert}` }}
               src={this.state.lamp}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          <img key={'10'}
               style={{position: 'absolute', zIndex: '5' ,transform:`${this.state.invert}` }}
               src={this.state.energy}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
  
          />
          {this.props.storage ?
            <div>
          {this.props.storage.srcDef.map((elem, index) =>
            <img key={index}
                 style={{position: 'absolute', zIndex: elem.zIndex,transform:`${this.state.invert}`}}
                 src={elem.img}
                 width={this.state.width}
                 alt={'test'}
                 height={this.state.height}
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
                   onClick={() => {
                     this.setState ({changeColor: elem.background});
                   }}
                   hoverable
                   style={{width: 235, background: elem.background}}
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
                onClick={() =>
                {this.setState ({floor: elem.img})}}
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
                  onClick={() => this.setState ({door: elem.img})}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.sampleImage}/>}
                 >
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
               </Col>
              )}
            </Panel>
            <Panel header="Плинтуса" key="4">
              {this.props.storage.srcPlint.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={() => this.setState ({plint: elem.img})}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.sampleImage}/>}
                 >
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
               </Col>
              )}
            </Panel>
            <Panel header="Галтели" key="5">
              {this.props.storage.molding.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={() => this.setState ({molding: elem.img})}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.sampleImage}/>}
                 >
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
               </Col>
              )}
            </Panel>
            <Panel header="Подоконник" key="6">
              {this.props.storage.sill.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={() => this.setState ({podium: elem.img})}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.sampleImage}/>}
                 >
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
               </Col>
              )}
            </Panel>
            <Panel header="Светильник" key="7">
              {this.props.storage.light.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={() => this.setState ({lamp: elem.img})}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.sampleImage}/>}
                 >
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
               </Col>
              )}
            </Panel>
            <Panel header="Электрика" key="8">
              {this.props.storage.elecric.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={() => this.setState ({energy: elem.img})}
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