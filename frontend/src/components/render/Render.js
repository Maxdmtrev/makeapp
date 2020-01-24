import React, {Component} from 'react';
import { Carousel } from 'antd';
import '../../app.css'
class Render extends Component {
    render () {
        return (<Carousel>
                <div>
                    <h3>1</h3>
                    <h3>1</h3>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                    <h3>2</h3>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                    <h3>3</h3>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                    <h3>4</h3>
                    <h3>4</h3>
                </div>
         </Carousel>);
    }
}

export default Render;

