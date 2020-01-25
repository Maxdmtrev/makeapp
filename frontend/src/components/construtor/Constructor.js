import React, {Component} from 'react';
import { Card, Col, Collapse, Row} from 'antd';
import {GetUrlAC} from '../../redux/creators';
import {connect} from 'react-redux';


const {Meta} = Card;
const {Panel} = Collapse;

class Constructor extends Component {

//  async componentDidMount () {
//     const response=await fetch("/slider")
//    const result=await response.json()
// this.props.addUrlAC(result)
//  }

  render () {
    const {cardImage,  cardTitle, cardText} = this.props;
    console.log (this.props.cardData);
    return (
        <div>
      <Row>
        <Col span={14}>
          {this.props.cardData ?
            <div>
          {this.props.cardData.srcDef.map((elem, index) =>
            <img key={index} style={{position: 'absolute', zIndex: elem.zIndex}} src={elem.img} width={'400'} alt={'test'} height={'400px'}
                  />
          )}
            </div>
          : '...Load'}
        </Col>
        <Col span={10}>
          <Collapse accordion className={'card-input'}>
            <Panel header="Пол" key="1">
              {this.props.cardData.srcSample.map((elem,index)=>
              <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={(e) => console.log(e.target)}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.img}/>}
                 >
                   
                   <Meta title={elem.title} description={elem.descript}/>
                 </Card>
              </Col>
              )}
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
            <Panel header="Двери" key="3">
              {this.props.cardData.srcDoor.map((elem,index)=>
               <Col key={index} span={11} style={{margin: 6}}>
                 <Card
                  onClick={(e) => console.log(e.target)}
                  hoverable
                  style={{width: 215}}
                  cover={<img alt="example" src={elem.img}/>}
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
    src: store.src
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addUrlAC: (data) => {
      dispatch (GetUrlAC (data));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Constructor);