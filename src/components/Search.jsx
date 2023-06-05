import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Search = ({artistName, onChangeName}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control type='text' placeholder='Enter an Artist' value={artistName} onChange={onChangeName}/>
            <Button type='submit'>Submit</Button>

        </Form>
    )
}

export { Search }