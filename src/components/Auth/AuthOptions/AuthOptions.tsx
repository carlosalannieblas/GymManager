import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react';
import "./AuthOptions.scss";
export function AuthOptions(props: { openRegister: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void) | undefined; openLogin: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void) | undefined }) {
  return (
    <div className="auth-options">
        <h1>Miles de gym rats en tus manos</h1>
        <Button className="register" primary onClick={props.openRegister}>Registrate gratis</Button>
        <Button className="login" secondary onClick={props.openLogin}>Inicia sesión</Button>
    </div>
  )
}
