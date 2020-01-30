import { Table} from 'antd';
import React, {Component} from 'react';
import {connect} from "react-redux";

import {Link} from 'react-router-dom';



class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
const columns = [
  { title: 'Материал', dataIndex: 'title', key: 'title' },
  { title: 'Цена', dataIndex: 'price', key: 'price' },

  {
    title: 'Action',
    dataIndex: 'href',
    key: 'href',
    render: (e) => <Link to="#" onClick={()=>{window.open(e)}}>URL</Link>,
  },
];

return (

    <Table
     rowKey="uid"
      columns={columns}
      expandedRowRender={e => <span>{e.descript}</span>}
      dataSource={this.props.priceAction}
    />

  )
}
}

function mapStateToProps(store) {
  return {
    priceToilet: store.priceToilet,
    priceLocker: store.priceLocker,
    priceAction: store.priceAction
  };
}


export default connect(mapStateToProps)(InfoCard);