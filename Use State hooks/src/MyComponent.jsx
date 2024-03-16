import React, {useState} from 'react'

function MyComponent(){
    const[name, setName] = useState("guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);
    
    const updateName = ()=> {
        let name = "spongebob";
        setName(name);
    }
    const updateAge = ()=> {
        let curAge = age;
        setAge(curAge + 2);
    }
    const updateEmployement = () => {
        let status = isEmployed;
        setIsEmployed(!status);
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}> Set Name</button>
        <p>Name: {age}</p>
        <button onClick={updateAge}> Set Age</button>
        <p>Name: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateEmployement}> Set Employment Status </button>
        </>
    );
}

export default MyComponent;