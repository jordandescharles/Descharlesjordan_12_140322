import './App.css';
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

/**
 * @param {props} all 
 * @returns {App | Component}
 */

function App(props) {

  const mainData = props.main.data
  const activity = props.activity.data.sessions
  const session = props.session.data.sessions
  const performance = props.performance.data
  const kcal = props.main.data.keyData.calorieCount
  const prot = props.main.data.keyData.proteinCount
  const glu = props.main.data.keyData.carbohydrateCount
  const lip = props.main.data.keyData.lipidCount
  const score = props.main.data.todayScore



  return (
    <div className="App">
      <Header />
      <main>
        <LeftNav />
        <article className='bigBlock'>
          <div className='fullPage'>
            <Welcomer data={mainData} />
          </div>

          <div className='flexCharts'>
            <div className='allCharts'>
              <MainChart data={activity} />

              <div className='LittleCharts'>
                <TinyLineChart data={session} />
                <RadChart radData={performance} />
                <SimpleRadial score={score} />
              </div>
            </div>

            <article>
              <RightIndicator img={ImgCalorie} data={kcal + "kcal"} type={"Calories"} />
              <RightIndicator img={ImgProt} data={prot + "g"} type={"Protéines"} />
              <RightIndicator img={ImgGlu} data={glu + "g"} type={"Glucides"} />
              <RightIndicator img={ImgLip} data={lip + "g"} type={"Lipides"} />
            </article>
          </div>
        </article>

      </main>
    </div>
  );
}

export default App;

