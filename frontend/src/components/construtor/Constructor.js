import React, {Component} from 'react';
import imageone from '../../img/room/default(2).png';
import imagetree from '../../img/room/default(2).png';
import imagetwo from '../../img/room/default(1).png';
import imagefour from '../../img/room/bimetal.png';
import {Button, Card, Col, Collapse, Row} from 'antd';

const {Meta} = Card;
const {Panel} = Collapse;

class Constructor extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  
  render () {
    const {cardImage, cardTitle, cardText} = this.props;
    return (<div>
      <Row>
        <Col span={14}>
          <img style={{position: 'absolute', zIndex: 1}} src={imageone} width={'400px'} alt={'test'} height={'400px'}
               id={'el1'}/>
          <img style={{position: 'absolute', zIndex: 2}} src={imagetwo} width={'400px'} alt={'test'} height={'400px'}
               id={'el2'}/>
          <img style={{position: 'absolute', zIndex: 1}} src={imagetree} width={'400px'} alt={'test'} height={'400px'}
               id={'el3'}/>
          <img style={{position: 'absolute', zIndex: 2}} src={imagefour} width={'400px'} alt={'test'} height={'400px'}
               id={'el4'}/>
        </Col>
        <Col span={10}>
          < Collapse accordion>
            <Panel header="Название секции" key="1">
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
  
            <Panel header="Название секции" key="2">
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
          </Collapse>,
          <Button id={'btn'}>Change img</Button>
        </Col>
      </Row>
    </div>);
  }
}

export default Constructor;