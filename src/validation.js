const Validation = (values) =>{
    let errors={}
    if(!values.username){
        errors.username="please enter a username"
    }
    else if(values.username.length<5){
        errors.username="username must be at least 5 characters"
    }

    if(!values.password){
        errors.password="please enter a password"
    }
    else if(values.username.length<9){
        errors.password="password must be at least 9 characters"
    }
    return errors;
}
export default Validation;