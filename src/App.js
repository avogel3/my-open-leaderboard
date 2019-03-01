import * as React from 'react';
import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';
import LeaderboardTable from './components/LeaderboardTable.js';
import LoadingSpinner from './components/LoadingSpinner.js';

const WHITELISTED_ATHLETES = [
  'Bayley Judah',
  'Andrew Vogel',
  'Zachary Beck',
  'Nathaniel Pennington',
  'Dylan Ward',
  'Shane Biggar',
];

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    loading: true,
    affiliateData: {},
  };
  componentWillMount() {
    if (process.env.NODE_ENV === 'production') {
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
    } else {
      console.log('Using sample data...');
      const sampleData = require('./sampleData.json');
      this.setState({ affiliateData: sampleData, loading: false });
    }
  }
  render() {
    const { loading, affiliateData } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <AppContainer>
          {loading && <LoadingSpinner />}
          {!loading && (
            <Container style={{ marginTop: 15 }}>
              <Row>
                <LeaderboardTable
                  data={affiliateData}
                  whitelistedAthletes={WHITELISTED_ATHLETES}
                />
              </Row>
            </Container>
          )}
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
