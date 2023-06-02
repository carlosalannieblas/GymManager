import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {AuthOptions, LoginForm, RegisterForm} from "../../components/Auth"
import "./Auth.scss"
import {Image} from "semantic-ui-react"
import { gymRatLogoWhite, backgroundAuth} from "../../assets"

export function Auth() {
  const [typeForm, setTypeForm] = useState("authOptions");

  const openLogin = () => setTypeForm("login");
  const openRegister = ()=> setTypeForm("register")
  const openAuthOptions = ()=> setTypeForm("authOptions")

  const renderForm = () =>{
    if(typeForm === "login"){
      return <LoginForm openRegister={openRegister} openAuthOptions={openAuthOptions}/>
    }
    if(typeForm === "register"){
      return <RegisterForm openLogin={openLogin} openAuthOptions={openAuthOptions} />
    }
    if(typeForm === "authOptions")
    return <AuthOptions openLogin={openLogin} openRegister={openRegister} />
  }
  return (
    <div className="auth">   
      <div className="auth__content">
        <Image 
        src={gymRatLogoWhite}
        alt="gymrat"
        className='auth__content-logo'/>
          {renderForm()}
      </div>
    </div>


  )
}
