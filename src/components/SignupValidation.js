function Validation(values) {
    let error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.name === "") {
            error.name = "Le nom ne doit pas être vide"
       }
       else {
            error.name = ""
       }

        if(values.email === "") {
             error.email = "Le nom ne doit pas être vide"
        }
        else if(!email_pattern.test(values.email)) {
             error.email = "L'Email ne correspond pas"
        }else {
             error.email = ""
        }

        if(values.password === "") {
             error.password = "Le mot de passe ne doit pas être vide"
        }
        else if(!password_pattern.test(values.password)) {
             error.password = "Le mot de passe ne correspond pas"
        } else {
            error.password = ""
        }
        return error;
    }

export default Validation