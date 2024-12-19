export function validate(firstName,lastName,email,message,checkbox,radioSelection) {
    let errors = {};

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isfirstNameValid = /^[A-Za-z ]+$/.test(firstName);
    const isLastNameValid = /^[A-Za-z ]+$/.test(lastName);
    const isTextArea = /[\s\S]+/.test(message);



    if(!isEmailValid){
        errors.email = "Please enter a valid email address";
    }

    if(!isfirstNameValid){
        errors.firstName = "This field is required"
    }

    if(!isLastNameValid){
        errors.lastName = "This field is required";
    }

    if(!isTextArea){
        errors.textbox = "This field is required"
    }

    if(!checkbox){
        errors.consent = "To submit this form, please consent to being contacted"
    }

    if(!radioSelection){
        errors.query = "This field is required"
    }


    return errors;
}