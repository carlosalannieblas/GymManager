import React from 'react'
import{Button} from "semantic-ui-react"
import { Auth} from "../../api"

const auth = new Auth();

export function Home() {
  return (
    <div>
        <h1 style={{color: "white"}}>Home Screen</h1> 
        <Button color="red" onClick={auth.logout}>
          Cerrar sesión
        </Button>
     </div>
  )
}
