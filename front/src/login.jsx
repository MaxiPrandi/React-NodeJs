import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validacion from './loginValidar';

const Login = () => {
    //setValores es la funcion que guarda los valores ingresados
    const[valores,setValores]=useState({
     email:'',
     password:''   
    })
    //validar errores de ingreso de datos
    const [errores,setErrores]=useState({})


    //funcion para cortar la recarga de la pagina que hace por defecto un Formulario cuando apretas boton
    function enviarDatos(event){//valida y envia los datos
        event.preventDefault()
        setErrores(validacion(valores))//primero se valida y despues tira errores
        console.log(errores)

    }
    // Funcion para tomar los datos ingresados en el input
    function datoInput(event){//..spredoperato (esparze los datos dentro de un elemento definido)
        setValores(info=>({...info,[event.target.name]:[event.target.value]}))
        console.log(valores)
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
            <div className="bg-white p-3 rounded w-25">
                <form action="" onSubmit={enviarDatos}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Ingrese su Email' required className='form-control' name='email' onChange={datoInput} />
                        {errores.email && <span className='text-danger'>{errores.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Ingrese su Password' required className='form-control' name='password' onChange={datoInput} />
                        {errores.password && <span className='text-danger'>{errores.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success mt-2 w-100'>Login</button>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, eligendi.</p>
                 <Link to='/signup' className='btn btn-danger border w-100'>Signup</Link>


                </form>
            </div>

        </div>
    )
}

export { Login }