import React from 'react'
import { Form, Icon,Button, ButtonProps } from 'semantic-ui-react'
import "./RegisterForm.scss"
import {useFormik} from "formik"
import * as Yup from "yup"


export  function RegisterForm(props: { openAuthOptions: React.MouseEventHandler<HTMLParagraphElement> | undefined; openLogin: React.MouseEventHandler<HTMLSpanElement> | undefined }) {
  const passwordRules= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  //min 5 characters, 1 upoercaseLetter, 1 lowercase letter, 1 numericdigit
  const formik = useFormik({
        initialValues: {
           email: '',
           password: '',
           confirmPassword:'',
           username: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("itsAnError").required("itsAnError"),
            password: Yup
            .string()
            .min(8, "itsAnError")
            .matches(passwordRules,"itsAnError")
            .required("itsAnError"),
            confirmPassword: Yup
            .string()
            .oneOf([Yup.ref("password"),undefined], "itsAnError")
            .required("itsAnError")
            ,
            username: Yup.string().min(5, "itsAnError").required("itsAnError"),
          }),
        validateOnChange: false,
         onSubmit: values => {
           //console.log("Registro OK")
           //console.log(values);
           //console.log(formik.errors.email)
         },
       });

       console.log(formik.errors)

let isError = formik.errors.email=="ERR0R"?true:false;


//boolean handler for input error
    let handleError = (x: string | undefined) =>{
      return x=="itsAnError"?true:false;
    }

  return (
    <div className="register-form">
<h1>Toma el mando con una cuenta nueva de Gym Rat</h1>
<Form onSubmit={formik.handleSubmit}>
  <Form.Input
   name="email" 
   type="text" 
   placeholder="Correo electronico" 
   icon="mail outline"
   onChange={formik.handleChange}
   value={formik.values.email}
   error={isError}
   />
  <Form.Input 
  name="password"
  type="password" 
  placeholder="Contraseña" 
  icon={
  <Icon 
  name="eye" 
  link 
  onClick={() => console.log("Show Password") 
} />} 
  onChange={formik.handleChange}
  value={formik.values.password}
  error={handleError(formik.errors.password)}
  />
    <Form.Input 
  name="confirmPassword"
  type="password" 
  placeholder="Confirmar contraseña" 
  icon={
  <Icon 
  name="eye" 
  link 
  onClick={() => console.log("Show Password") 
} />} 
  onChange={formik.handleChange}
  value={formik.values.confirmPassword}
  error={handleError(formik.errors.confirmPassword)}
  />
  <Form.Input 
  name="username"
  type="text"
  placeholder="Nombre" 
  icon="user circle outline"
  onChange={formik.handleChange}
  value={formik.values.username}
  error={handleError(formik.errors.username)}
  />



  <Form.Button 
  type="submit"   
  primary 
  fluid>
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

