import React, {Component} from 'react';
import {Tabs} from 'antd';
import Constructor from './Constructor';
import dataRoom from './dataBase';
import dataRoom2 from './dataBase2';
import dataRoom3 from './dataBase3';

const {TabPane} = Tabs;

class NavConstructor extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: dataRoom,
      data2:dataRoom2,
      data3:dataRoom3
  
  
  
    };
  }
  
  render () {
    return (
        <Tabs defaultActiveKey="1" style={{minHeight: 500}}>
           <TabPane tab="Комната" key="1">
             <Constructor cardData={this.state.data} cardPrice={"123"}/>
           </TabPane>
           <TabPane tab="Санузел" key="2">
             <Constructor cardData={this.state.data2} cardPrice={"321"}/>
           </TabPane>
           <TabPane tab="Кухня" key="3">
             <Constructor cardData={this.state.data3} cardPrice={"333"}/>
           </TabPane>
        </Tabs>
    );
  }
}

export default NavConstructor;