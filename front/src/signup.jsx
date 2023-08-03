import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validacionSignup from './signupvalidar';
import axios from 'axios';

const Signup = () => {
    //setValores es la funcion que guarda los valores ingresados
    const [valores, setValores] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const navegacion=useNavigate()

    const [errores,setErrores]=useState({})

    function enviarDatos(event){//valida y envia los datos
        event.preventDefault()
        setErrores(validacionSignup(valores))//primero se valida y despues tira errores
        console.log('hola')
      //  if(errores.nombre==='' && errores.email==='' && errores.password===''){
            axios.post('http://localhost:8085/signup', valores )//concetamos al front con el back 
            .then(response=>
                navegacion('/')// aca redirigimos al index
                ) // el response=>console.log(response)->puede tirar error
            .catch(error=>console.log(error))
            .finally()// se puede poner una ultima funcion a ejecutar


    //    }
        
    }
    function datoInput(event){//..spredoperato (esparze los datos dentro de un elemento definido)
        setValores(info=>({...info,[event.target.name]:[event.target.value]}))
        console.log(valores)
    }


        return (
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
                <div className="bg-white p-3 rounded w-25">
                    <form action="" onSubmit={enviarDatos}>
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" placeholder='Ingrese su Nombre' required className='form-control' name='nombre' onChange={datoInput} />
                            {errores.email && <span className='text-danger'>{errores.email}</span>}
                        </div>
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
                        <button type='submit' className='btn btn-success mt-2 w-100'>Signup</button>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, eligendi.</p>
                        <Link to='/' className='btn btn-danger border w-100'>Login</Link>


                    </form>
                </div>

            </div>
        )
    }

    export { Signup }