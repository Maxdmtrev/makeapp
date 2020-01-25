import React from "react";
import imgElegant from "../../img/preset/elegant-white.png";
import imgClassic from "../../img/preset/exquisite-classic.png";
import imgPeach from "../../img/preset/peach-dreams.png";
import imgVivaro from "../../img/preset/vivaro-alpine.png";
import imgCaramel from "../../img/preset/cold-caramel.png"

import { Card, Button, CardImg, CardGroup, CardBody } from "reactstrap";

const Slider = props => {
  return (
    <div className={"scroll-image"}>
      <CardGroup>
        <Card>
          <CardImg top width="100%" src={imgClassic} alt="Card image cap" />
          <CardBody>
            <Button>Classic</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgElegant} alt="Card image cap" />
          <CardBody>
            <Button>Elegant White</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgPeach} alt="Card image cap" />
          <CardBody>
            <Button>Peach dreams</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgVivaro} alt="Card image cap" />
          <CardBody>
            <Button>Vivaro Alpine</Button>
          </CardBody>
        </Card>
              <Card>
                  <CardImg top width="100%" src={imgCaramel} alt="Card image cap" />
                  <CardBody>
                      <Button>Cold Caramel</Button>
                  </CardBody>
              </Card>
      </CardGroup>
    </div>
  );
};

export default Slider;
