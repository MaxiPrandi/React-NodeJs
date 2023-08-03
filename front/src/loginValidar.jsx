//React Hooks Form
function validacion(valores){
    let error={}
    const email_patron=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    //const password_patron=[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
   const password_patron=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(valores===''){
            error.email='El email esta vacio'

        }else if(!email_patron.test(valores.email)){
            error.email='El email no es valido'
        }
        else{
            error.email=''
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
export default validacion