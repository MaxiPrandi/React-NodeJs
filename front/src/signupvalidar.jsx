function validacionSignup(valores){
    let error={}
    const email_patron=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    //const password_patron=[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
   const password_patron=/[a-z0-9-]/
   
        if(valores.nombre===''){
          error.nombre='Nombre esta vacio'
        }
        else {
            error.nombre=''
        }

        if(valores.password===''){
            error.password='Password esta vacio'
        } else if(!password_patron.test(valores.password)){
            error.password='El Password no es valido'
        }else{
            error.password=''
            
        }
        return error
    
        

}
export default validacionSignup