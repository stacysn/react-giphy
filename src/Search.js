
import React, { Component } from 'react';
// import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form className="Search-form" onSubmit={this.props.handleSubmit}>
          <input type="text"
                 value={this.props.query}
                 placeholder="enter search term"
                 onChange={this.props.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;
