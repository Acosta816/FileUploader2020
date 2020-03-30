import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ListContainer from './ListContainer/ListContainer';



class App extends React.Component {

  static defaultProps = {

  }

  state = {
    files: [
      {fileType: 'jpg', size: '4.3MB', name: 'Lany and I at Six Flags.jpg', status: 'Synced'},
      {fileType: "mov", size: "1.3GB", name:"Onward.mov", status: "Uploaded"},
      {fileType: "txt", size: "0.9KB", name:"Our Moving Plan.txt", status: "Uploaded"},
      {fileType: "mp3", size: "3.4MB", name:"Green-Hill-Zone.mp3", status: "New"},
    ],
    searchTerm: "".toLowerCase(),
    filterOption: "All"
  }


  updateStateFilterOption = (status)=> {
    console.log('radio button pushed');
    console.log(status);

    this.setState({
      filterOption: status
    })

  };

  updateSearchTerm = (term)=> {
    this.setState({
      searchTerm: term
    })
  }

  render(){
    console.log(this.state);

    return(
      <div className="App">
        <h1>File Uploader App</h1>
        <SearchBar searchTerm={this.state.searchTerm} stateFilterOption={this.state.filterOption} cbUpdateStateFilterOption={this.updateStateFilterOption} cbUpdateSearchTerm={this.updateSearchTerm} />
        <ListContainer files={this.state.files} searchTerm={this.state.searchTerm} stateFilterOption={this.state.filterOption} />
      </div>
    )
  }
}


export default App;