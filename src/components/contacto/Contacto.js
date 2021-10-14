import React from "react";
import { Badge,Form,Button,Row } from "react-bootstrap";
import { useState } from "react";



function validacion(input){   
    let errores = []
    
        if(!input.nombre){
        errores.nombre = "Nombre is required"
        }

      if(!input.email){
        errores.email = "Email is required"
      }else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email)){
        errores.email = "Email must be an email" 
     }

      if(!input.mensaje){
        errores.mensaje = "Mensaje is required"
      }else if (String(input.mensaje).length > 256){
        errores.mensaje = "the subject requires a maximum of 256 characters"
      }else if (String(input.mensaje).length < 10){
        errores.mensaje = "the subject requires a minimum of 10 characters"
      }
    return errores;
}

export default function About() {

const [state,setState] = useState ({
    nombre: "",
    email: "",
    mensaje:""
})

const[fails,setFails] = useState({
    nombre:"Nombre is required",
    email:"Email is required",
    mensaje:"Mensaje is required"
})

function onsubmitform(e){
  e.preventDefault();
  alert(`el correo es ${state.email}, el nombre es ${state.nombre}, el mensaje es ${state.mensaje}`)
}

function onHandleChange(e){
  setState({
    ...state,
    [e.target.name] : e.target.value
  })

  setFails(
    validacion({
      ...state, 
      [e.target.name] : e.target.value})
  )
}


return (
<div >
    <h2 style={{textAlign:"left"}}  ><Badge>Contacto</Badge></h2>
        <Form style={{textAlign:"left"}}  onSubmit={(e) => onsubmitform(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Nomhre</Form.Label>
                <Form.Control 
                type="text" 
                name="nombre"
                placeholder="Nombre" 
                value={state.nombre} 
                onChange={(e) => onHandleChange(e)}/>
                {fails.nombre ? <p style={{color:"red"}}>{fails.nombre}</p> : <p style={{color:"green"}}>Correcto</p>} 
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="name@example.com" 
                    value={state.email} 
                    onChange={(e) => onHandleChange(e)}/>
                    {fails.email ? <p style={{color:"red"}}>{fails.email}</p> : <p style={{color:"green"}}>Correcto</p>} 
            </Form.Group>




            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                
                    <Form.Control 
                    as="textarea" 
                    name="mensaje"
                    rows={3} 
                    style={{ height: '15rem' }} 
                    value={state.mensaje} 
                    onChange={(e) => onHandleChange(e)}/>
                    {fails.mensaje ? <p style={{color:"red"}}>{fails.mensaje}</p> : <p style={{color:"green"}}>Correcto</p>}
            </Form.Group>
        <Row>
        <Button variant="primary" type="submit" style={{marginBottom:"5rem"}}  disabled={fails.email || fails.asunto || fails.mensaje ? true : false}>
            Enviar
        </Button>

        <Button variant="primary"  style={{marginBottom:"5rem"}}>
            Cancelar
        </Button>
        </Row>
        </Form>


</div>
);
}
