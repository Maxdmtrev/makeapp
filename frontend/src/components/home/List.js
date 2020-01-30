import React, {Component} from 'react';
import {Card, Col, Icon, message, Row, Upload,} from 'antd';
import {connect} from 'react-redux';
import InfoCard from './infoCard';

const { Dragger } = Upload;

class List extends Component {

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  
  totalPrice=()=>{
    const{priceDoor,priceElectric,priceFloor,priceLight,priceMolding,pricePlint,priceSill,priceBath,priceBathfloor,priceKeramaWall,priceLocker,priceShower,priceToilet,roomCard} =this.props
    // console.log (priceElectric);
    let sumPrice=priceDoor+priceElectric+priceFloor+priceLight+priceMolding+pricePlint+priceSill+priceBath+priceBathfloor+priceKeramaWall+priceLocker+priceShower+priceToilet+roomCard.price
    return sumPrice
  }

  render() {
    const prop = {
      name: 'file', multiple: true, action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    };
    const {roomCard} = this.props;
  return (<div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
   
     <Row style={{margin: 5, padding: 5}}>
       <Col offset={3} span={16}>
         <Card title={"Добро пожаловать: " +this.props.username} style={{backgroundColor: '#282c34', width: '100%', opacity: '0.90'}}>
           <h2 style={{color: 'white'}}> Ваш адрес: {roomCard.address}</h2>
           <p style={{color: 'white'}}>{roomCard.countRoom} -комнатная квартира площадью {roomCard.m2} м2</p>
           <p style={{color: 'white'}}>Количество санузлов: {roomCard.countBath}</p>
           <p style={{color: 'white'}}>Количество дверей: {roomCard.countDoor}</p>
         
           <p style={{color: 'white'}}>Начальная стоимость дизайн проекта: {this.props.roomCard.price} </p>
           <p style={{color: 'white'}}>Общая стоимось: {this.totalPrice()} </p>
       
         </Card>
       </Col>
  
       <Col offset={3} span={16}>
         <InfoCard/>
       </Col>
  
       <Col offset={3} span={16}>
         <Dragger {...prop}>
           <p className="ant-upload-drag-icon">
             <Icon type="inbox"/>
           </p>
           <p className="ant-upload-text">Click or drag file to this area to upload</p>
           <p className="ant-upload-hint">
             Support for a single or bulk upload. Strictly prohibit from uploading company data or other
             band files
           </p>
         </Dragger>,
       </Col>
     </Row>
      </div>
  )
}}

function mapStateToProps(store) {
  return {
    
    isLogin: store.isLogin, username: store.username, ymaps: store.ymaps,roomCard: store.roomCard,
    priceDoor: store.priceDoor,
    priceElectric: store.priceElectric,
    priceFloor: store.priceFloor,
    priceLight: store.priceLight,
    priceMolding: store.priceMolding,
    pricePlint: store.pricePlint,
    priceSill: store.priceSill,
    priceBath: store.priceBath,
    priceBathfloor: store.priceBathfloor,
    priceKeramaWall: store.priceKeramaWall,
    priceLocker: store.priceLocker,
    priceShower: store.priceShower,
    priceToilet: store.priceToilet,
  };
}


export default connect(mapStateToProps)(List);