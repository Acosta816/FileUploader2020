import React from 'react';
import './FilterOptions.css';


class FilterOptions extends React.Component {

    render() {
        const { stateFilterOption } = this.props; //shortcut for assigning a const variable to the state prop passed in. Same as.... ( const stateFilterOption = this.props.stateFilterOption; )
console.log(stateFilterOption)
        return (
            <div className="FilterOptions">
                FilterOptions

                <div className="FilterOptions__option">     {/* "All" radio */}
                    <label htmlFor="filter_all">All</label>
                    <input type="radio" id="filter__all" value="All" name="filter"  checked={(stateFilterOption === "All")}  onChange={(e)=> {this.props.cbUpdateStateFilterOption(e.target.value)}} />
                </div>

                <div className="FilterOptions__option">     {/* "Uploaded" radio */}
                    <label htmlFor="filter_upload">Uploaded</label>
                    <input type="radio" value="Uploaded" id="filter_uploaded" name="filter"   checked={(stateFilterOption === "Uploaded")}  onChange={(e)=> {this.props.cbUpdateStateFilterOption(e.target.value)}} />
                </div>

                <div className="FilterOptions__option">     {/* "Synched" radio */}
                    <label htmlFor="filter_synced">Synced</label>
                    <input type="radio" id="filter_synced" value="Synced" name="filter"   checked={(stateFilterOption === "Synced")}  onChange={(e)=> {this.props.cbUpdateStateFilterOption(e.target.value)}} />
                </div>

                <div className="FilterOptions__option">     {/* "New" radio */}
                    <label htmlFor="filter_new">New</label>
                    <input type="radio" id="filter_new" value="New" name="filter"   checked={(stateFilterOption === "New")}  onChange={(e)=> {this.props.cbUpdateStateFilterOption(e.target.value)}} />
                </div>
            
            </div>
        )
    }
}

export default FilterOptions;