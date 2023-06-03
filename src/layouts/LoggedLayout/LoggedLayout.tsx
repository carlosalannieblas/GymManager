import React from "react"
import {} from "./LoggedLayout.scss"

export function LoggedLayout(props: any){
    const {children} = props;
    console.log(props)
    return(
      <div className="logged-layout">
        <div className="logged-layout__content">
            <div className="logged-layout__left-menu">
                <p>left menu</p>
            </div>
            <div className="logged-layout__children-content">
                <div className="logged-layout__top-bar">
                    <p>Top bar</p>
                </div>
               <div>{children}</div> 
            </div>
        </div>
        <div className="logged-layout__footer">
             <p>Footer</p>
        </div>
      </div>  

    );
}