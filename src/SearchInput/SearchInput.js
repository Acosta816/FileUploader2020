import React from 'react';
import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchInput extends React.Component {

    static defaultProps = {

    }


    
// ***It really wasn't necessary to pass the searchTerm prop down and assign... value={this.props.searchTerm}   but that's how the lecture had us do it. It was probably just to show us that you can't mutate a prop from a nested component without using an onChange. 
    render() {

        return (
            <div className="SearchInput">
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder="search term.." value={this.props.searchTerm} onChange={ (e)=> {this.props.cbUpdateSearchTerm(e.target.value)} } /> 
            </div>
        )
    }
}

export default SearchInput;

