import * as React from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar.js';
import LeaderboardTable from './components/LeaderboardTable.js';

const cftcId = 2060;
const crossfitLeaderboardEndpoint = `https://games.crossfit.com/competitions/open/2019/leaderboards?affiliate=${cftcId}&division=1&scaled=0&page=1`;

class App extends React.Component {
  state = {
    loading: true,
    affiliateData: {},
  };
  componentWillMount() {
    // Fetch crossfit api
    fetch(crossfitLeaderboardEndpoint)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: 15 }}>
          <Row>
            <LeaderboardTable />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
