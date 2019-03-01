import * as React from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar.js';
import LeaderboardTable from './components/LeaderboardTable.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import Data from './data.json';

class App extends React.Component {
  state = {
    loading: true,
    affiliateData: {},
  };
  componentWillMount() {
    fetch(process.env.REACT_APP_LEADERBOARD_LAMBDA_ENDPOINT)
      .then(res => {
        return res.json();
      })
      .catch(e => {
        console.log(e);
        this.setState({ loading: false });
      })
      .then(responseJson =>
        this.setState({ affiliateData: responseJson, loading: false })
      );
  }
  render() {
    console.log(this.state.affiliateData);
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <Navbar />
        {this.state.loading && <LoadingSpinner />}
        {!this.state.loading && (
          <Container style={{ marginTop: 15 }}>
            <Row>
              <LeaderboardTable />
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
