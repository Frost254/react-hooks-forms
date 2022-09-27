import React, { useState } from 'react'
import Form from './components/Form'

function ParentComponent() {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")

    function handleFirstName(event) {
        setFirstName(event.target.value)
    }

    function handleSecondName(event) {
        setSecondName(event.target.value)
    }

    return ( <
        Form firstName = { firstName }
        secondName = { secondName }
        handleFirstName = { handleFirstName }
        handleSecondName = { handleSecondName }
        />
    )

}

export default ParentComponent;