import React, {Component} from 'react';
import {Tabs} from 'antd';
import Constructor from './Constructor';
import dubboro from '../../img/room/dubbordo.jpg';
import dubcuba from '../../img/room/dubcuba.jpg';

const {TabPane} = Tabs;

class NavConstructor extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  
  render () {
    return (
        <Tabs defaultActiveKey="1" style={{minHeight: 500}}>
           <TabPane tab="Комната" key="1">
             <Constructor cardText={'sdfds'} cardImage={dubboro} cardImageOne={dubcuba} cardTitle cardPrice={"123"}/>
           </TabPane>
           <TabPane tab="Санузел" key="2">
             <Constructor cardText={'23'} cardImage={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} cardTitle cardPrice={"321"}/>
           </TabPane>
           <TabPane tab="Кухня" key="3">
             <Constructor cardText={'32'} cardImage={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} cardTitle cardPrice={"333"}/>
           </TabPane>
        </Tabs>
    );
  }
}

export default NavConstructor;