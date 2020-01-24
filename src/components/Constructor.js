import React, {Component} from 'react';
import imageone from '../img/room/default.png';
import imagetwo from '../img/room/default(1).png';
import imagetree from '../img/room/default(2).png';
import imagefour from '../img/room/bimetal.png';

class Constructor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={'wrap-img'}>
                <img src={imageone} width={'400px'} height={'400px'} id={'el1'}/>
                {/*<img src={imagetwo} width={'400px'} height={'400px'} id={'el2'}/>*/}
                {/*<img src={imagetree} width={'400px'} height={'400px'} id={'el3'}/>*/}
                <img src={imagefour} width={'400px'} height={'400px'} id={'el4'}/>
                <button id={'btn'}>Change img</button>
            </div>
        );
    }
}

export default Constructor;