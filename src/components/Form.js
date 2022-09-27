import React from "react";

function Form({
    firstName,
    secondName,
    handleFirstName,
    handleSecondName,
}) {

    return ( <
        form >
        <
        input type = "text"
        onChange = { handleFirstName }
        value = { firstName }
        /> <
        input type = "text"
        onChange = { handleSecondName }
        value = { secondName }
        /> <
        button type = "submit" > Submit < /button> <
        /form>
    );
}

export default Form;