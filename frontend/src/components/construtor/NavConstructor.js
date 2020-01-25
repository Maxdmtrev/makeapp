import React, {Component} from 'react';
import {Tabs} from 'antd';
import Constructor from './Constructor';

const {TabPane} = Tabs;

class NavConstructor extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  
  render () {
    return (<Tabs defaultActiveKey="1" style={{minHeight: 500}}>
       <TabPane tab="Название помещения" key="1">
         <Constructor cardText={'sdfds'}  cardImage={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} cardTitle cardPrice={"123"}/>
       </TabPane>
       <TabPane tab="Название помещения" key="2">
         <Constructor cardText={'23'} cardImage={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} cardTitle cardPrice={"321"}/>
       </TabPane>
       <TabPane tab="Название помещения" key="3">
         <Constructor cardText={'32'} cardImage={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} cardTitle cardPrice={"333"}/>
       </TabPane>
     </Tabs>);
  }
}

export default NavConstructor;