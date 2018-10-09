import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry';
import { setSearchField } from '../../actions/actions';
import './App.css';

class App extends Component {
  state = {
    robots: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.json().then((users) => {
        this.setState({ robots: users });
      });
    });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1 className="main-title tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="main-title">ROBOFRIENDS</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = {
  setSearchField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
