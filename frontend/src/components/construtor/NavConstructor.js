import React, {Component} from 'react';
import {Tabs} from 'antd';
import ConstructorRoom from './ConstructorRoom';
import ConstructorBath from './ConstructorBath';
import ConstructorKitchen from "./ConstructorKitchen";

const {TabPane} = Tabs;

class NavConstructor extends Component {
  constructor (props) {
    super (props);
    this.state = {

    };
  }
  
  render () {
    return (
        <Tabs defaultActiveKey="1" style={{minHeight: 500, minWidth: 600}}>
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
    );
  }
}

export default NavConstructor;