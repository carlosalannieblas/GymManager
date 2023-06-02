import React, { useState } from 'react'
import { Form, Icon,Button, ButtonProps } from 'semantic-ui-react'
import "./RegisterForm.scss"
import {useFormik} from "formik"
import * as Yup from "yup"
import {Auth} from "../../../api"

const auth=new Auth();

export  function RegisterForm(props: { openAuthOptions: React.MouseEventHandler<HTMLParagraphElement> | undefined; openLogin: React.MouseEventHandler<HTMLSpanElement> | undefined }) {
  const [showPassord, setShowPassord] = useState(false);
  const onShowHiddenPassword=()=>setShowPassord((prevState)=>!prevState)
  
  const passwordRules= /^(?=.*\d)(?=.*[A-Z]).{5,}$/;
  const emailRules= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //min 5 characters, 1 upoercaseLetter, 1 lowercase letter, 1 numeric digit
  const formik = useFormik({
        initialValues: {
           email: '',
           password: '',
           confirmPassword:'',
           username: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().matches(emailRules,"Correo no valido").required("El correo es requerido"),
            password: Yup
            .string()
            .min(5, "Al menos 5 caracteres")  
            .matches(passwordRules,"5 caracteres, 1 mayus y 1 numero")
            .required("La contraseña es requerida"),
            confirmPassword: Yup
            .string()
            .min(5, "Al menos 5 caracteres")
            .oneOf([Yup.ref("password"),undefined], "Las cotraseñas deben coincidir")
            .required("Confirmar contraseña requerida")
            ,
            username: Yup.string().min(5, "Al menos 5 caracteres").required("Nombre de usuario requerido"),
          }),
        validateOnChange: true,
         onSubmit: async (formValue) => {
          try {
            await auth.register(formValue.email, formValue.password)
          } catch (error) {
            console.error(error)
          }
         },
       });
  return (
    <div className="register-form">
<h1>Toma el mando con una cuenta nueva</h1>
<Form onSubmit={formik.handleSubmit}>
{ formik.errors.email && formik.touched.email &&(
  <div className='error'>{formik.errors.email}</div>
)}
  <Form.Input
   name="email" 
   type="text" 
   placeholder="Correo electronico" 
   icon="mail outline"
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value={formik.values.email}
   className={formik.errors.email&& formik.touched.email?"error":""}
   />
{ formik.errors.password && formik.touched.password &&(
  <div className='error'>{formik.errors.password}</div>
)}
  <Form.Input
  name="password"
  type={showPassord?"text":"password"}
  placeholder="Contraseña" 
  icon={
  <Icon 
  name={showPassord?"eye slash":"eye"}
  link 
  onClick={onShowHiddenPassword}
   />} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.password}
  className={formik.errors.password&& formik.touched.password?"error":""}
  />
  {formik.touched.confirmPassword && formik.errors.confirmPassword &&(
  <div className='error'>{formik.errors.confirmPassword}</div>
)}
    <Form.Input 
  name="confirmPassword"
  type={showPassord?"text":"password"}
  placeholder="Confirmar contraseña" 
  icon={
  <Icon 
  name={showPassord?"eye slash":"eye"}
  link 
  onClick={onShowHiddenPassword}
   />} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.confirmPassword}
  error={formik.errors.confirmPassword&& formik.touched.confirmPassword?true:false}
  />
    {formik.touched.username && formik.errors.username &&(
  <div className='error'>{formik.errors.username}</div>
)}
  <Form.Input 
  name="username"
  type="text"
  placeholder="Nombre" 
  icon="user circle outline"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.username}
  error={formik.errors.username&& formik.touched.username?true:false}
  />
  <Form.Button 
  type="submit"   
  primary 
  fluid loading={formik.isSubmitting}>
    Continuar
  </Form.Button>
</Form>
<div className="register-form__options">
  <p onClick={props.openAuthOptions}>Volver</p>
  <p>¿Ya tienes una cuenta? <span onClick={props.openLogin}>Iniciar sesión</span></p>
</div>
    </div>
  )
}
