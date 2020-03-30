import React from 'react';
import './ListContainer.css';
import '../FileItem/FileItem';
import FileItem from '../FileItem/FileItem';


class ListContainer extends React.Component {

    static defaultProps = {
        files: []
    }


    renderFileItems = ()=> {
        const { searchTerm, stateFilterOption } = this.props;
        const list = this.props.files                       //if either of the below conditions prove true, the current file will be returned. So if the state's filterOptions is currently looking for "All" then the file will be returned. Or if the current file's status matches the state's filterOption then it will also be returned during this filter cache.
        .filter( file => file.name.toLowerCase().includes(searchTerm.toLowerCase()) && (stateFilterOption === 'All' || file.status === stateFilterOption) ) //filter thru files that include searchterm and 
        .map((file, index) => <li key={index}><FileItem file={file} /></li>);

        return list

    }

    render(){
        console.log(this.props.files);

        return(
            <div className="ListContainer">
                <ul>
                    {this.renderFileItems()}
                </ul>
                
            </div>
        )
    };

}


export default ListContainer;