import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react' 
export function LoginForm(props: { openRegister: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void) | undefined; openAuthOptions: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void) | undefined }) {
  return (
    <div style={{backgroundColor:"#f0f"}}>
        <h1>LoginForm</h1>

        <Button primary onClick={props.openRegister}>Registro</Button>
        <Button secondary onClick={props.openAuthOptions}>Atras</Button>
    </div>
  )
}
