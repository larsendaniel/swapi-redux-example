import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchData } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>Data from the Star Wars API</h1>
        {this.props.error && <p>{this.props.error}</p>}

        {this.props.data && (
          <ul>
            <li>Name: {this.props.data.name}</li>
            <li>Height: {this.props.data.height}</li>
            <li>Weight: {this.props.data.mass}</li>
            <li>Hair Color: {this.props.data.hair_color}</li>
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data, error: state.error };
};

const mapDispatchProps = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
