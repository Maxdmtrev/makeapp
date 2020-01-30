import { Table } from 'antd';
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
  // { title: 'Ссылка', dataIndex: 'href', key: 'href' },

  {
    title: 'Ссылка',
    dataIndex: 'href',
    key: 'href',
    render: (e) => <Link onClick={() =>  window.open(e)}>URL</Link>
  },
];

return (
    <Table
      columns={columns}
      expandedRowRender={e => <p style={{ margin: 0 }}>{e.descript}</p>}
      dataSource={this.props.priceAction}
    />
  )
}
}

function mapStateToProps(store) {
  return {
    priceAction: store.priceAction
  };
}


export default connect(mapStateToProps)(InfoCard);