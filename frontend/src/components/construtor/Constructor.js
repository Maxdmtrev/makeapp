import React, {Component} from 'react';
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
      data: dataRoom,
      imageone:null,
      imagetwo:null,
      imagetree:null,
      imagefour:null,
      imagefive:null
    };
  }
 async componentDidMount () {
    const response=await fetch("/slider")
   const result=await response.json()
this.setState({
  imageone:result[0],
  imagetwo:result[1],
  imagetree:result[2],
  imagefour:result[3],
  imagefive:result[4]
})
 }

  render () {
    const {cardImage, cardImageOne, cardTitle, cardText} = this.props;
        const {imageone, imagetwo, imagetree,imagefour,imagefive} = this.state;
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