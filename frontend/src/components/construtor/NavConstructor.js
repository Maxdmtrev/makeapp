import React, {Component} from 'react';
import {Tabs, Card, Row, Col} from 'antd';
import ConstructorRoom from './ConstructorRoom';
import ConstructorBath from './ConstructorBath';
import ConstructorKitchen from "./ConstructorKitchen";
import Slider from '../render/Slider';

const {TabPane} = Tabs;

class NavConstructor extends Component {

  
  render () {
    return (
     <div>
       <Row style={{margin: 5, padding: 5}}>
         <Col offset={2} span={22}>
           <Card >
             <Slider/>
           </Card>
         </Col>
         <Col offset={2} span={22}>
           <Card style={{margin:4}}>
             <Tabs defaultActiveKey="1" style={{minHeight: 600 , minWidth: 600, }}>
               <TabPane tab="Комната" key="1">
                 <ConstructorRoom cardData={''} cardPrice={''}/>
               </TabPane>
               <TabPane tab="Санузел" key="2">
                 <ConstructorBath cardData={''} cardPrice={''}/>
               </TabPane>
               <TabPane tab="Кухня" key="3">
                 <ConstructorKitchen cardData={''} cardPrice={''}/>
               </TabPane>
             </Tabs>
           </Card>
         </Col>
       </Row>    
</div>
    );
  }
}

export default NavConstructor;