
import React, {Component} from 'react';
import {Button, Card, Col, Collapse, Row} from 'antd';
import {connect} from 'react-redux';
import image from "../../img/bath/kerama_wall/kerama_belkanto.png"
import ceramic from "../../img/construct_bath/kerama_belkanto_fregat.png";
import thumb from "../../img/construct_bath/godmorgon_white.png";
import toilet from "../../img/construct_bath/cersanit_parva.png";
import floor from "../../img/construct_bath/bravat_opal.png";
import shower from "../../img/construct_bath/bravat_opal.png";
import bath from '../../img/bath/bath/cersanit_octavia.png';
import locker from '../../img/bath/locker/locker_white.png';
import {
  AddPriceBathAC,
  AddPriceBathFloorAC,
  AddPriceKeramaWallAC,
  AddPriceLockerAC,
  AddPriceShowerAC,
  AddPriceToiletAC
} from "../../redux/priceCreators";



const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorBath extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '100%',
      // height: '600px',
      wall: image,
      ceramic: ceramic,
      floor: floor,
      bath: bath,
      thumb: thumb,
      toilet: toilet,
      shower: shower,
      locker: locker,
      invert: 'scale(-1,1)',
      border: ''
    };
  }

  render() {
    // console.log(this.props.storage);
    return (
      <div>
        <Row>
          <Col span={13}>
            <img key={'1'}
                 style={{position: 'absolute', zIndex: '1',transform:`${this.state.invert}`}}
                 src={this.state.ceramic}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
            <img key={'2'}
                 style={{position: 'absolute', zIndex: '2', transform:`${this.state.invert}`}}
                 src={this.state.floor}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
            {/*<img key={'3'}*/}
            {/*     style={{position: 'absolute', zIndex: '3', transform:`${this.state.invert}`}}*/}
            {/*     src={this.state.ceramic}*/}
            {/*     width={this.state.width}*/}
            {/*     height={this.state.height}*/}
            {/*     alt={'test'}*/}
            {/*/>*/}
            <img key={'4'}
                 style={{position: 'absolute', zIndex: '4', transform:`${this.state.invert}`}}
                 src={this.state.bath}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
            <img key={'5'}
                 style={{position: 'absolute', zIndex: '5', transform:`${this.state.invert}`}}
                 src={this.state.thumb}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
            <img key={'6'}
                 style={{position: 'absolute', zIndex: '5', transform:`${this.state.invert}`}}
                 src={this.state.toilet}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}

            />
            <img key={'7'}
                 style={{position: 'absolute', zIndex: '5', transform:`${this.state.invert}`}}
                 src={this.state.shower}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
            <img key={'8'}
                 style={{position: 'absolute', zIndex: '6', transform:`${this.state.invert}`}}
                 src={this.state.locker}
                 width={this.state.width}
                 height={this.state.height}
                 alt={'test'}
            />
          </Col>
          <Col span={10} offset={1}>
            <Collapse accordion className={'card-input'}>
              <Panel header="Настенная плитка" key="1">
                {this.props.storage.keramaWall.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                        name={index}
                        onClick={(event) =>{ event.preventDefault();  this.setState ({ceramic: elem.img});
                          this.props.addPriceKeramaWall(elem.price);
                          // if(event.target.id === index) {
                          //   this.setState({border: "2px solid black"})
                          // };
                          }}
                        hoverable
                        style={{width: 215, border: `${this.state.border}`}}
                        cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                    <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
                    </Card>
                  </Col>
                )}
              </Panel>

              <Panel header="Напольная плитка" key="2">
                {this.props.storage.floor.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                      onClick={() =>{ this.setState ({floor: elem.img});
                        this.props.addPriceBathFloor(elem.price);
                      }}
                      hoverable
                      style={{width: 215}}
                      cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                      <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
                    </Card>
                  </Col>
                )}
              </Panel>
              <Panel header="Унитаз" key="3">
                {this.props.storage.toilet.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                      onClick={() =>{ this.setState ({toilet: elem.img});
                      this.props.addPriceToilet(elem.price);
                      }}
                      hoverable
                      style={{width: 215}}
                      cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                      <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
                    </Card>
                  </Col>
                )}
              </Panel>
              <Panel header="Ванна" key="4">
                {this.props.storage.bath.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                      onClick={() =>{
                        this.setState ({bath: elem.img});
                        this.props.addPriceBath(elem.price);}}
                      hoverable
                      style={{width: 215}}
                      cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                    </Card>
                    <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
                  </Col>
                )}
              </Panel>
              <Panel header="Душевая стойка" key="5">
                {this.props.storage.shower.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                      onClick={() =>{ this.setState ({shower: elem.img});
                      this.props.addPriceShower(elem.price);
                      }}
                      hoverable
                      style={{width: 215}}
                      cover={<img alt="example" src={elem.sampleImage}/>}
                    >
                      <Meta title={elem.title} description={elem.descript}/>
                      <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
                    </Card>
                  </Col>
                )}
              </Panel>
              <Panel header="Тумба под раковину" key="6">
                {this.props.storage.locker.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                        onClick={() =>{ this.setState ({locker: elem.img});
                        this.props.addPriceLocker(elem.price);
                        }}
                        hoverable
                        style={{width: 215}}
                        cover={<img alt="example" src={elem.sampleImage}/>}
                    >
                      <Meta title={elem.title} description={elem.descript}/>
                      <Button style={{ marginTop: 10, marginLeft: 20}} type="primary" onClick={() => window.open(`${elem.href}`)}>{elem.price}</Button>
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
    storage: store.bathStore
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addPriceBath: (data) => {
      dispatch (AddPriceBathAC (data));
      },
    addPriceBathFloor: (data) => {
      dispatch (AddPriceBathFloorAC (data));
      },
    addPriceKeramaWall: (data) => {
      dispatch (AddPriceKeramaWallAC (data));
      },
    addPriceLocker: (data) => {
      dispatch (AddPriceLockerAC (data));
      },
    addPriceShower: (data) => {
      dispatch (AddPriceShowerAC (data));
      },
    addPriceToilet: (data) => {
      dispatch (AddPriceToiletAC (data));
      },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorBath);
