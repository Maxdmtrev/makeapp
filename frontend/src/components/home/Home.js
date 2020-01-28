import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Form, Input, Row, Select} from 'antd';
import {GetCardAC} from '../../redux/creators';
import {connect} from 'react-redux';

const {Option} = Select;


class Home extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      address: null,
      m2: null,
      countBath: null,
      countDoor: null,
      countRoom: null,
      designItem: false,
      desPrice: 0,
      perePlan: false,
      perePlanPrice: 0,
      change: true
    };
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
  
  loadMap = () => {
    new this.props.ymaps.SuggestView ('suggest', {
      results: 5, offset: [0, 5]
    });
  };
  
  countPrice = () => {
    
    let totalPrice = (this.props.roomCard.m2 * 10000) + (this.props.roomCard.countBath * 30000) + (this.props.roomCard.countDoor * 10000) + (this.props.roomCard.countRoom *this.props.roomCard.perePlanPrice) + (this.props.roomCard.desPrice * this.props.roomCard.m2);
    return totalPrice;
  };
  
  render () {
    const {address, m2, countBath, countDoor, countRoom, change, desPrice, perePlanPrice} = this.state;
    const {roomCard} = this.props;
    return (<div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
      
      {change ?
       <Card title="Калькулятор ремонта квартиры" style={{backgroundColor: '#282c34', width: '60%', opacity: '0.90'}}>
         <Form><Row style={{margin: 5, padding: 5}}>
           <Col offset={2} span={12}>
             <Form.Item label="Адрес" hasFeedback>
               <Input type="text" name="address" style={{width: '100%'}} id="suggest" placeholder="Название улицы"
                      value={address} onChange={e => {
                 this.setState ({address: e.target.value});
               }}/>
             </Form.Item>
           </Col>
           <Col span={4} offset={3}>
             <Form.Item label="Площадь м2" hasFeedback>
               <Input style={{width: 100}} type="number" name="city" id="exampleCity" placeholder="м2"
                      onChange={e => {
                        this.setState ({m2: e.target.value});
                      }}
               /> </Form.Item>
           </Col>
         </Row>
           <Row style={{margin: 5, padding: 5}}>
             <Col offset={2} span={5}>
               <Form.Item label="Количество комнат" style={{color: 'white'}}>
                 <Select style={{width: 120}} onChange={e => {
                 
                   this.setState ({countRoom: e});
                 }}>
                   <Option value="1">1-комнатная</Option>
                   <Option value="2">2-комнатная</Option>
                   <Option value="3">3-комнатная</Option>
                   <Option value="4">4-комнатная</Option>
                   <Option value="5">5-комнатная</Option>
                 </Select>
               </Form.Item>
             </Col>
             <Col offset={3} span={5}>
               <Form.Item label={'Количество дверей'}>
                 <Select style={{width: 100}} onChange={(e) => this.setState ({countDoor: e})}>
                   
                   <Option value="1">1</Option>
                   <Option value="2">2</Option>
                   <Option value="3">3</Option>
                   <Option value="4">4</Option>
                   <Option value="5">5</Option>
                 </Select>
               </Form.Item>
             </Col>
             <Col offset={2} span={5}>
               <Form.Item label="Количество санузлов">
                 <Select style={{width: 100}} onChange={(e) => this.setState ({countBath: e})}>
                   <Option value="1">1</Option>
                   <Option value="2">2</Option>
                 </Select>
               </Form.Item>
             </Col>
           </Row>
           <Row style={{margin: 5, padding: 5}}>
             <Col offset={2} span={13}>
               <Form.Item>
                 <Checkbox checked={this.state.designItem} value={1000} onChange={(e) => {
                   if (!this.state.designItem) {
                     this.setState ({desPrice: e.target.value, designItem: !this.state.designItem});
                   }
                   else {
                     this.setState ({desPrice: 0, designItem: !this.state.designItem});
                   }
                 }}
                 >
                   Дизайнерская мебель
                 </Checkbox>
                 <Checkbox checked={this.state.perePlan} value={10000} onChange={(e) => {
                   if (!this.state.perePlan) {
                     this.setState ({perePlanPrice: e.target.value, perePlan: !this.state.perePlan});
                   }
                   else {
                     this.setState ({perePlanPrice: 0, perePlan: !this.state.perePlan});
                   }
                 }}
                 >
                   Перепланировка
                 </Checkbox>
               </Form.Item>
             </Col>
             <Col offset={2} span={2}>
               <Form.Item>
                 <Button type="primary" htmlType="submit" onClick={() => {
                   if ((address, m2, countBath, countDoor, countRoom) !== null) {
                     this.setState ({change: !change});
                     this.props.addCardAC (address, m2, countBath, countDoor, countRoom, desPrice, perePlanPrice);
                   }
                 }}>
                   Перейти к расчету
                 </Button>
               </Form.Item>
             </Col>
           </Row>
         </Form>
       </Card> : <Row>
         <Col>
           <Card title="Калькулятор ремонта квартиры" style={{backgroundColor: '#282c34', width: '100%'}}>
             <h2 style={{color: 'white'}}> Ваш адрес{roomCard.address}</h2>
             <p style={{color: 'white'}}>{roomCard.countRoom} -комнатная квартира площадью {roomCard.m2} м2</p>
             <p style={{color: 'white'}}>Количество санузлов: {roomCard.countBath}</p>
             <p style={{color: 'white'}}>Количество дверей: {roomCard.countDoor}</p>
             
             <p style={{color: 'white'}}>Начальная стоимость дизайн проекта: {this.countPrice ()} </p>
             <Button onClick={() => {
               this.setState ({change: !change});
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
    addCardAC: (address, m2, countBath, countDoor, countRoom, desPrice, perePlanPrice) => {
      dispatch (GetCardAC (address, m2, countBath, countDoor, countRoom, desPrice, perePlanPrice));
    }
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);
