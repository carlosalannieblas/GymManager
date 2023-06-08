import React from "react";
import { Icon, Image } from "semantic-ui-react";
import "./TopBar.scss";
import {Link, useNavigate} from "react-router-dom";
import { Auth, User } from "../../../api";
import { noImage} from "../../../assets";


const auth = new Auth();
const user = new User();

export function TopBar(){

const navigation = useNavigate();
const userData = user.getMe();

const displayName= userData?.displayName || "Mi cuenta";
const avatar = userData?.photoURL || noImage;
    return(
        <div className="top-bar" >
            <Icon name="angle left" className="top-bar__back" link onClick={()=> navigation(-1)} />
            <div className="top-bar__right">
            <Link to="/profile">
               <Image src={avatar} avatar />
                <span>Username</span> 
            </Link>
            <Icon className="power own-class" link onClick={auth.logout} />
            </div>
        </div>  
      
    );
}