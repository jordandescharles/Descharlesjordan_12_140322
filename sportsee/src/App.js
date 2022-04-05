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
    super(props);

    this.state = {
      datas: []
    };
  }

  async componentDidMount() {
    const res = await axios.get(`user/${userId}`);
    this.setState({ datas: res.data })
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return ( <></>
   /*  <div className="App">
        <Header />
        <main>
          <LeftNav />
          <article className='bigBlock'>
            <div className='fullPage'>
              <Welcomer data={this.MAIN_DATA} />
            </div>

            <div className='flexCharts'>
              <div className='allCharts'>
                <MainChart data={this.USER_ACTIVITY} />

                <div className='LittleCharts'>
                  <TinyLineChart data={this.USER_AVERAGE_SESSIONS} />
                  <RadChart radData={performance} />
                  <SimpleRadial score={this.USER_PERFORMANCE} />
                </div>
              </div>

              <article className='RightItems'>
                <RightIndicator img={ImgCalorie} data={this.kcal + "kcal"} type={"Calories"} />
                <RightIndicator img={ImgProt} data={this.prot + "g"} type={"Protéines"} />
                <RightIndicator img={ImgGlu} data={this.glu + "g"} type={"Glucides"} />
                <RightIndicator img={ImgLip} data={this.lip + "g"} type={"Lipides"} />
              </article>
            </div>
          </article>

        </main>
      </div>;*/
    )
  }
}

export { App };


    // const ACTIVITY =  axios.get(`user/${userId}/activity`);
    // this.USER_ACTIVITY = ACTIVITY.data;

    // const AVERAGE_SESSIONS =  axios.get(`user/${userId}/average-sessions`);
    // this.USER_AVERAGE_SESSIONS = AVERAGE_SESSIONS.data;

    // const PERFORMANCE =  axios.get(`user/${userId}/performance`);
    // this.USER_PERFORMANCE = PERFORMANCE.data;

    // this.kcal = MAIN_DATA.data.keyData.calorieCount;
    // this.prot = MAIN_DATA.data.keyData.proteinCount;
    // this.glu = MAIN_DATA.data.keyData.carbohydrateCount;
    // this.lip = MAIN_DATA.data.keyData.lipidCount;