import React, {Component} from 'react';
import {Button, Card, Col, Collapse, Row} from 'antd';

const {Meta} = Card;
const {Panel} = Collapse;

class Constructor extends Component {
  constructor (props) {
    super (props);
    this.state = {
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
   console.log (result);

  }
  
  render () {
    const {cardImage, cardTitle, cardText} = this.props;
    const {imageone, imagetwo, imagetree,imagefour,imagefive} = this.state;
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
          <img style={{position: 'absolute', zIndex: 1}} src={imagefive} width={'400px'} alt={'test'} height={'400px'}
               id={'el5'}/>
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