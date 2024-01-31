import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    
    const handleSearch = ( event ) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    }

    return (
        <Form className='mb-3'>
            <FormControl
                type='text'
                placeholder='Search...'
                onChange={handleSearch}
            />
        </Form>
    )
}

export default SearchBar;