import React from 'react'
import "./Profile.scss";
import { Button } from 'semantic-ui-react';
import { User } from '@/api';
import { AvatarUpdate } from '@/components/Profile';
export function Profile() {
  const userController = new User();
  const user =userController.getMe();
  return (
    <div className='profile'>
      <h1>Configuración</h1>
      <div className="profile__block">
          <div>
            <AvatarUpdate />
          <span>{user?.displayName}</span>
          </div>
        <Button onClick={()=> console.log("Cambiar displayName")}>Actualizar</Button>
         </div>
         <div className="profile__block">
      <span>Email: {user?.email}</span>
      <Button onClick={()=> console.log("Cambiar email")}>Actualizar</Button>
         </div>
         <div className="profile__block">
         <span>Contraseña: {user?.uid}</span>
      <Button onClick={()=> console.log("Cambiar contraseña")}>Actualizar</Button>
         </div>
    </div>
  )
}
