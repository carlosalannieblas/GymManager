import React from "react";
import "./Footer.scss";
import { Image , Button} from "semantic-ui-react";
import {noImage} from "../../../assets";
export function Footer(){
    return(
        <div className="footer">
              <div className="footer__gym">
        {/*Gym im checking, gym where he signed up */}
       <span>Bongos Paris</span>
          </div>
          <div className="footer__persona">
          <Image src={noImage} />
          </div>
          <div className="footer__nombre">
         {/*client or staff name */}
            <span>Carlos Alan Nieblas Grijalva</span>
          </div>
          <div className="footer__center">
                   {/*gyms is allowed or job position */}
        <p>Membresia VIP</p>
          </div>
          <div className="footer__dias">
                 {/*days left or tipo de contrato*/}
          <p>Dias restantes: 1</p>
          </div>
          <Button name="primary">Detalles</Button>
        </div>
    )
}