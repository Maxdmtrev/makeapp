import React from "react";
import { connect } from "react-redux";
import { SetPresetAC } from "../../redux/creators";
import { Card, Row, Col } from "antd";

class Slider extends React.Component {
  setPreset = elem => {
    this.props.addPreset(elem);
  };
  render() {
    return (
      <div >
        <Row className={"scroll-image"}>
        {this.props.storage.preset.map((elem, index) => (
          <Col key={index} span={3} ><Card
            onClick={() => this.setPreset(elem)}
            hoverable
            style={{ width: 215 }}
            cover={<img alt="example" src={elem.img} />}
          >{elem.title}</Card>
          </Col>
        ))}
          </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    storage: store.constStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPreset: data => {
      dispatch(SetPresetAC(data));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);

