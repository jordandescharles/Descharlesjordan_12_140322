import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Welcomer from './components/Welcomer';
import MainChart from './components/MainChart';
import TinyLineChart from './components/TinyLineChart';
import RadChart from './components/RadChart';
import SimpleRadial from './components/SimpleRadial';
import RightIndicator from './components/RightIndicator';
import ImgCalorie from './img/calories-icon.png';
import ImgLip from './img/fat-icon.png';
import ImgGlu from './img/carbs-icon.png';
import ImgProt from './img/protein-icon.png';

/**
 * texte de commentaire
 * @param {object} all 
 * @returns {App | Component}
 */

function App(all) {
  
const mainData = all.main
const activity = all.activity.data.sessions
const session = all.session.data.sessions
const performance = all.performance.data
const Kcal = all.main.data.keyData.calorieCount
const Prot = all.main.data.keyData.proteinCount
const Glu = all.main.data.keyData.carbohydrateCount
const Lip = all.main.data.keyData.lipidCount
const Score = all.main.data.todayScore



  return (
    <div className="App">
        <Header />
        <main>
          <LeftNav />
          <article className='bigBlock'>
            <div className='fullPage'>
              <Welcomer data={mainData}/>
            </div>

            <div className='flexCharts'>

            <div className='allCharts'>
              <MainChart data={activity}/>

              <div className='LittleCharts'>
                <TinyLineChart data={session}/>
                <RadChart data={performance}/>
                <SimpleRadial score={Score} />
              </div>
            </div>

              <article>
              <RightIndicator img={ImgCalorie} data={Kcal+"kcal"} type={"Calories"} />
              <RightIndicator img={ImgProt} data={Prot+"g"} type={"Protéines"} />
              <RightIndicator img={ImgGlu} data={Glu+"g"} type={"Glucides"} />
              <RightIndicator img={ImgLip} data={Lip+"g"} type={"Lipides"} />
              </article>
           </div>   
          </article>
          
        </main>
    </div>
  );
}

export default App;
 
