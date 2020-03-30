import React from 'react';
import './SearchBar.css';
import SearchInput from '../SearchInput/SearchInput';
import FilterOptions from '../FilterOptions/FilterOptions';


class SearchBar extends React.Component {

    render(){

        return(
            <div className="SearchBar">
                <SearchInput searchTerm={this.props.searchTerm} cbUpdateSearchTerm={this.props.cbUpdateSearchTerm}/>
                <FilterOptions stateFilterOption={this.props.stateFilterOption} cbUpdateStateFilterOption={this.props.cbUpdateStateFilterOption}/>
            </div>
        )
    }
}


export default SearchBar;