import React from "react";
import { Menu } from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom"
import "./LeftMenu.scss";
export function LeftMenu(){
    const {pathname}=useLocation(); 
    const isCurrentPage =(route: string)=>{
        return route === pathname;
    }
    return(
        <div className="left-menu">
            <Menu secondary vertical fluid>
            <Menu.Item as={Link} to="/" name="Inicio" icon="home" active={isCurrentPage("/")} />
            <Menu.Item as={Link} to="/clients" name="Clientes" icon="id badge outline" active={isCurrentPage("/clients")} />
            <Menu.Item as={Link} to="/users" name="Usuarios" icon="users" active={isCurrentPage("/users")} />
            <Menu.Item as={Link} to="/gyms" name="Gimnasios" icon="university" active={isCurrentPage("/gyms")}/>
            </Menu>
        </div>
    )
}