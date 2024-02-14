import * as React from 'react';
import { DataContext } from '../../../DataContext';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
    const { data, setData, dataFiltered, setDataFiltered } = React.useContext(DataContext);  
    
    console.log("TEST DATA: ", data);
    console.log("TEST FILTER: ", dataFiltered);

    const handleChange = ( event ) => {
        const searchTerm = event.target.value;
      
        console.log("TERM: ", searchTerm);
        const regex = new RegExp(searchTerm, 'gi')
        //filter matches from raw data
        const filtered = data.filter(item => {

            // return either the name of the artist or song
            return (item?.track?.artists[0]?.name.match(regex) || item?.track?.name.match(regex));
        })

        setDataFiltered(filtered);
    }

    return (
        <Form className='mb-3'>
            <FormControl
                type='text'
                placeholder='Search...'
                onChange={handleChange}
            />
        </Form>
    )
}

export default SearchBar; 