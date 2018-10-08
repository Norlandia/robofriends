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
    searchfield: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.json().then((users) => {
        this.setState({ robots: users });
      });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1 className="main-title tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="main-title">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
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



function mapStateToProps(state) {
  return {
    searchfield: state.searchRobots.searchfield,
  };
}

const mapDispatchToProps = {
  onSearchChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
