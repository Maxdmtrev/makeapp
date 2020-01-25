import React, {Component} from 'react';
import imageone from '../../img/room/default(2).png';
import imagetree from '../../img/room/default(2).png';
import imagetwo from '../../img/room/default(1).png';
import imagefour from '../../img/room/bimetal.png';
import imagefive from '../../img/room/floor_base.png';
import changeimg from '../../img/room/floor_1.png';
import dataRoom from "../../dataRoom";

import {Button, Card, Col, Collapse, Row} from 'antd';

const {Meta} = Card;
const {Panel} = Collapse;

class Constructor extends Component {
  constructor (props) {
    super (props);
    this.state = {
      src: imagefive,
      data: dataRoom
    };
  }

  handleClick() {
    console.log('значение this:', this);
    this.setState({
      src: changeimg,
    })
  }

  handleClickOne() {
    console.log('значение this:', this);
    this.setState({
      src: imagefive,
    })
  }
  
  render () {
    const {cardImage, cardImageOne, cardTitle, cardText} = this.props;
    // console.log(this.state.data.src);
    return (
        <div>

      <Row>
        <Col span={14}>
          {this.state.data ?
            <div>
          {this.state.data.src.map((elem, index) =>
            <img key={index} style={{position: 'absolute', zIndex: elem.zIndex}} src={elem.img} width={'400'} alt={'test'} height={'400px'}
                 id={'el1'} />

          )}
            </div>
          : '...Load'}
          {/*<img style={{position: 'absolute', zIndex: 2}} src={imagetwo} width={'400px'} alt={'test'} height={'400px'}*/}
          {/*     id={'el2'}/>*/}
          {/*<img style={{position: 'absolute', zIndex: 1}} src={imagetree} width={'400px'} alt={'test'} height={'400px'}*/}
          {/*     id={'el3'}/>*/}
          {/*<img style={{position: 'absolute', zIndex: 2}} src={imagefour} width={'400px'} alt={'test'} height={'400px'}*/}
          {/*     id={'el4'}/>*/}
          {/*<img style={{position: 'absolute', zIndex: 2}} src={this.state.src} width={'400px'} alt={'test'} height={'400px'}*/}
          {/*     id={'el5'}*/}
          {/*/>*/}
        </Col>
        <Col span={10}>
          <Collapse accordion className={'card-input'}>
            <Panel header="Пол" key="1">
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImage}/>}
                >
                  <Button id={'btn'} onClick={(e) => this.handleClick(e)}>Change img</Button>
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
              </Col>
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImageOne}/>}
                >
                  <Button id={'btn'} onClick={(e) => this.handleClickOne(e)}>Change img</Button>
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
                
              </Col>
            </Panel>
  
            <Panel header="Стена" key="2">
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImage}/>}
                >
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
              </Col>
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImage}/>}
                >
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
    
              </Col>
            </Panel>
            <Panel header="Название секции" key="3">
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImage}/>}
                >
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
              </Col>
              <Col span={11} style={{margin: 6}}>
                <Card
                 hoverable
                 style={{width: 215}}
                 cover={<img alt="example" src={cardImage}/>}
                >
                  <Meta title={cardTitle} description={cardText}/>
                </Card>
    
              </Col>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>);
  }
}

export default Constructor;