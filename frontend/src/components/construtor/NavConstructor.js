import React, {Component} from 'react';
import {Tabs,Card} from 'antd';
import ConstructorRoom from './ConstructorRoom';
import ConstructorBath from './ConstructorBath';
import ConstructorKitchen from "./ConstructorKitchen";

const {TabPane} = Tabs;

class NavConstructor extends Component {

  
  render () {
    return (

     <Card style={{margin:4}}>
        <Tabs defaultActiveKey="1" style={{minHeight: 800, minWidth: 600, }}>
           <TabPane tab="Комната" key="">
             <ConstructorRoom cardData={''} cardPrice={''}/>
           </TabPane>
           <TabPane tab="Санузел" key="1">
             <ConstructorBath cardData={''} cardPrice={''}/>
           </TabPane>
           <TabPane tab="Кухня" key="">
             <ConstructorKitchen cardData={''} cardPrice={''}/>
           </TabPane>
        </Tabs>
         </Card>
    );
  }
}

export default NavConstructor;