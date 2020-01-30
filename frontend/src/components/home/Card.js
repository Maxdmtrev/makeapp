import { Table } from 'antd';
import React, {Component} from 'react';
import {connect} from "react-redux";

import {Link} from 'react-router-dom';



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
const columns = [
  { title: 'Материал', dataIndex: 'title', key: 'title' },
  { title: 'Цена', dataIndex: 'price', key: 'price' },
  { title: 'Ссылка', dataIndex: 'href', key: 'href' },

  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <Link>Delete</Link>,
  },
];



// const data = [
//   {
//     key: 1,
//     name: `${this.props.priceToilet.title}`,
//     price: `${this.props.priceToilet.price}`,
//     href: <Button onClick={() =>  window.open(`${this.props.priceToilet.href}`)}>URL</Button>,
//     description: `${this.props.priceToilet.descript}`,
//   },
//   {
//     key: 2,
//     name: `${this.props.priceLocker.title}`,
//     price: `${this.props.priceLocker.price}`,
//     href: <Button onClick={() =>  window.open(`${this.props.priceLocker.href}`)}>URL</Button>,
//     description: `${this.props.priceLocker.descript}`,
//   },
//   {
//     key: 3,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
//   },
// ];


return (
    <Table
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
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


export default connect(mapStateToProps)(Card);