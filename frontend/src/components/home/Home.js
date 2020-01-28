import React, {Component} from 'react';
import {Button, Checkbox, Col, Form, Input, Row, Select,Card} from 'antd';
import {GetCardAC} from '../../redux/creators';
import {connect} from 'react-redux';

const {Option} = Select;


class Home extends Component {
  constructor (props) {super (props)
  
  this.state={
      address: null,
      m2:null,
      countBath: null,
      countDoor: null,
      countRoom:null,
    change:true
  }
  }
  
  componentDidMount () {
    if (this.state.change) {
      this.loadMap ();
    }
   }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.change !== prevState.change && this.state.change) {
      this.loadMap ();
    }
  }
   loadMap=()=>{
     new this.props.ymaps.SuggestView ('suggest', {
       results: 5, offset: [15, 30]
     });
   }
  render () {
    const{address,m2,countBath,countDoor,countRoom,change}=this.state;
    const{roomCard}=this.props;
    return (<div style={{backgroundColor: "#282c34" }}  >
      {change ?  <Form ><Row style={{margin:5,padding:5}} >
        <Col span={9}  >
          <Form.Item label="Address">
            <Input type="text" name="address" id="suggest" placeholder="Название улицы"  value={address} onChange={e=>{
              this.setState({address: e.target.value})
            }}/>
          </Form.Item>
        </Col>
        <Col span={4} offset={1}>
          <Form.Item label="Площадь м2"  hasFeedback>
            <Input style={{width: 170}} type="number" name="city" id="exampleCity" placeholder="м2"
                   onChange={e=>{
              this.setState({m2: e.target.value})
            }}
            /> </Form.Item>
        </Col>
      </Row>
        <Row style={{margin:5,padding:5}}>
          <Col span={5}>
            <Form.Item label="Количество комнат" style={{color: "white"}}>
              <Select style={{width: 170}} onChange={e=>{
                this.setState({countRoom: e})
              }} >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>
          </Col>
    
          <Col span={5}>
            <Form.Item label={"Количество дверей"}>
              <Select style={{width: 170}} onChange={(e)=>    this.setState({countDoor: e})}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>
          </Col>
    
          <Col span={5}>
            <Form.Item label="Количество санузлов">
              <Select style={{width: 170}} onChange={(e)=>    this.setState({countBath: e})}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row style={{margin:5,padding:5}}>
          <Col span={10}>
            <Form.Item>
              <Checkbox>
                Дизайнерская мебель
              </Checkbox>
              <Checkbox>
              Перепланировка
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={()=>{
                if((address,m2,countBath,countDoor,countRoom)!==null){
                  this.setState({change: !change});
                  this.props.addCardAC(address,m2,countBath,countDoor,countRoom)
                }
    
          
              }}>
                Перейти к расчету
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>:<Row>
        <Col>
          <Card>
          
            <p>{roomCard.address}</p>
            <p>{roomCard.m2}</p>
            <p>{roomCard.countRoom}</p>
            <p>{roomCard.countDoor}</p>
            <p>{roomCard.countBath}</p>
            <Button onClick={()=>{
              this.setState({change: !change})
              // this.loadMap()
            }}>Изменить</Button>
          </Card>
        </Col>
      </Row>}
    </div>);
  }
}

function mapStateToProps (store) {
  return {
    roomCard: store.roomCard, ymaps: store.ymaps
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addCardAC: (address,m2,countBath,countDoor,countRoom) => {
      dispatch (GetCardAC (address,m2,countBath,countDoor,countRoom));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);
