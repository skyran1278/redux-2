import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange(event) {
    // console.log(this)
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} action="">
          <input
          type="text"
          placeholder="forecast"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
          <span>
            <button type="submit" >Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;