import { useState } from "react";

export default function MyForm (){

    const [person, setPerson] = useState({
        firstName: 'Charlespaul',
        lastName: 'Wabomba',
        email: 'CWabomba@gmail.com'
    });
    /*handling first name change */
    function handleChange (e) {
        setPerson({
            ...person,
            /* using a single event  handler 4 multiple fields*/
            [e.target.name]: e.target.value
        });
    }
    return(
        <>
        <label>
            First name:
            <input 
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
            />
        </label>
        <label>
            Last name:
            <input 
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
            />
        </label>
        <label>
            Email:
            <input 
            name="email"
            value={person.email}
            onChange={handleChange}
            />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName} {' '}
            ({person.email})
        </p>
        </>


    )
}