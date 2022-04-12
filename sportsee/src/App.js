import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Welcomer from './components/Welcomer';
import MainChart from './components/charts/MainChart';
import TinyLineChart from './components/charts/TinyLineChart';
import RadChart from './components/charts/RadChart';
import SimpleRadial from './components/charts/SimpleRadial';
import RightIndicator from './components/RightIndicator';
import ImgCalorie from './img/calories-icon.png';
import ImgLip from './img/fat-icon.png';
import ImgGlu from './img/carbs-icon.png';
import ImgProt from './img/protein-icon.png';

axios.defaults.baseURL = 'http://localhost:8080';
const userId = 12;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      activity: null,
      performance: null,
      average: null,
      loading: true,
    }
  }

  getData() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:8080/user/${userId}`)
        .then((resp) => {
          this.setState({ data: resp.data.data })
          resolve();
        })
        .catch(err => reject(err))
    })
  }

  getActivity() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:8080/user/${userId}/activity`)
        .then((resp) => {
          this.setState({ activity: resp.data.data })
          resolve();
        })
        .catch(err => reject(err))
    })
  }

  getPerformance() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:8080/user/${userId}/performance`)
        .then((resp) => {
          this.setState({ performance: resp.data.data })
          resolve();
        })
        .catch(err => reject(err))
    })
  }

  getAverage() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:8080/user/${userId}/average-sessions`)
        .then((resp) => {
          this.setState({ average: resp.data.data })
          resolve();
        })
        .catch(err => reject(err))
    })
  }

  /**
   * Promise.all is used to wait for the data before the render
   * it takes 4 promises from our 4 end points
   */

  componentDidMount() {
    Promise.all(
      [
        this.getData(),
        this.getActivity(),
        this.getPerformance(),
        this.getAverage()
      ]
    )
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render() {

    if (this.state.loading) {
      return <p>en chargement </p>
    }
    else {
      
      const userData = this.state.data;
      const userActivity = this.state.activity;
      const userPerformance = this.state.performance;
      const userAverage = this.state.average;

      return (

        <div className="App">
          <Header />
          <main>
            <LeftNav />
            <article className='bigBlock'>
              <div className='fullPage'>
                <Welcomer userData={userData} />
              </div>

              <div className='flexCharts'>
                <div className='allCharts'>
                  <MainChart userActivity={userActivity} />

                  <div className='LittleCharts'>
                    <TinyLineChart userAverage={userAverage} />
                    <RadChart userPerformance={userPerformance} />
                    <SimpleRadial userData={userData} />
                  </div>
                </div>

                <article className='RightItems'>
                  <RightIndicator img={ImgCalorie} data={userData.keyData.calorieCount + "kcal"} type={"Calories"} />
                  <RightIndicator img={ImgProt} data={userData.keyData.proteinCount + "g"} type={"Protéines"} />
                  <RightIndicator img={ImgGlu} data={userData.keyData.carbohydrateCount + "g"} type={"Glucides"} />
                  <RightIndicator img={ImgLip} data={userData.keyData.lipidCount + "g"} type={"Lipides"} />
                </article>
                
              </div>
            </article>
          </main>
        </div>
      )
    }
  }
}
export { App };
