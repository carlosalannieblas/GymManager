import React from "react"
import {} from "./LoggedLayout.scss"
import {LeftMenu, TopBar, Footer} from "../../components/Layout"
export function LoggedLayout(props: any){
    const {children} = props;
    return(
      <div className="logged-layout">
        <div className="logged-layout__content">
            <div className="logged-layout__left-menu">
                <LeftMenu />
            </div>
            <div className="logged-layout__children-content">
                <div className="logged-layout__top-bar">
                  <TopBar />
                </div>
               <div>{children}</div>
            </div>
        </div>
        <div className="logged-layout__footer">
          <Footer />
          <h1>HI</h1>
        </div>
      </div>  

    );
}