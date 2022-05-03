import React, { Component } from 'react';
import GetDatas from './callApi/GetDatas';
import Dashboard from './Page/Dashboard';
import DashboardError from './Page/DashboardError';

/**
 * source @value API or MOCK - to switch from online to local datas
 * userID @value 12 or 18 - 2 user mocked only
 */
const source = "API"
const userId = 12;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      errorData: false
    }
  }

  async componentDidMount() {

    const [err, data] = await GetDatas(userId, source)
    if (err) {
      this.setState({
        errorData: true
      })
    }
    else { 
      this.setState({
        data: data,
        loading: false
      })
    }
  }

  render() {
    if (this.state.loading || this.state.errorData ) {
      return (
        <div>
          <DashboardError />
        </div>
      )
    }
      return (
        <div>
          <Dashboard data={this.state.data}/>
        </div>
      )
  }
}

export default App;