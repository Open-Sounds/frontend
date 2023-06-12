import React from 'react'
import Form from 'react-bootstrap/Form'
import { FiSearch } from 'react-icons/fi'


const Search = ({artistName, onChangeName}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit} style={{ display: 'flex'}}>
            <FiSearch className="w-5 h-5 ml-4"/>
            <Form.Control type='text' placeholder='Enter an Artist or Song' value={artistName} onChange={onChangeName}/>

        </Form>
    )
}

export { Search }