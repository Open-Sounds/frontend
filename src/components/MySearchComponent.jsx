import * as React from 'react';
import SearchBar from './SearchBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MySearchComponent = ({ data, setData}) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([])

    const handleSearch = (term) => {
        setSearchTerm(term);
        //console.log("TEST: ", term);

        const filteredResults = data?.items.filter(item => {
            return ( item?.track?.name.toLowerCase().includes(term.toLowerCase()) || item?.track?.album?.artists[0]?.name.toLowerCase().includes(term.toLowerCase()) )
        })
        setSearchResults(filteredResults);
        console.log("TEST 2: ", searchResults);
        setData([...data, searchResults]);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch}>
 
            </SearchBar>
        </>
    )
}

export default MySearchComponent; 