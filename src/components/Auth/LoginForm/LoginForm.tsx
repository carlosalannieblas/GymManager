import React, { useState } from 'react'
import { Form, Icon } from 'semantic-ui-react'
import "./LoginForm.scss"
import {useFormik} from "formik"
import * as Yup from "yup"
import {Auth} from "../../../api"
const auth = new Auth();

export function LoginForm(props: { openAuthOptions: React.MouseEventHandler<HTMLParagraphElement> | undefined; openRegister: React.MouseEventHandler<HTMLSpanElement> | undefined; }) {
const [showPassord, setShowPassord] = useState(false);
const onShowHiddenPassword = ()=>setShowPassord((prevState)=>!prevState)
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
          .required("La contraseña es requerida")
        }),
      validateOnChange: true,
       onSubmit: async (formValue) => {
        try {
          await auth.login(formValue.email, formValue.password)
        } catch (error) {
          console.error(error)
        }
       }
     });
  return (
    <div className="login-form">
    <h1>Suda, sonrie, repite</h1>
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

 <Form.Button type="submit" primary
  fluid loading={formik.isSubmitting}>
  Iniciar sesión
 </Form.Button>
    </Form>
    <div className='login-form__options'>
      <p onClick={props.openAuthOptions}>Volver</p>
      <p>¿No tienes cuenta? <span onClick={props.openRegister}>Regístrarse</span></p>
    </div>
   </div>
  )
}
 // <Button primary onClick={props.openRegister}>Registro</Button>
       // <Button secondary onClick={props.openAuthOptions}>Atras</Button>