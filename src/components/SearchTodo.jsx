import React from "react";
import "../styles/styles.css";

class SearchTodo extends React.Component {
  handleSearch = () => {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  };
  render() {
    return (
      <div>
        <input
          type="search"
          ref="searchText"
          onChange={this.handleSearch}
          placeholder="Search your todo here!!!"
        />
        <br />
        <label>
          <input
            type="checkbox"
            ref="showCompleted"
            onChange={this.handleSearch}
          />
          show all todos
        </label>
      </div>
    );
  }
}

export default SearchTodo;
