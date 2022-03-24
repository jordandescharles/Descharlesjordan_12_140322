import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Welcomer from './components/Welcomer';
import axios from 'axios';
import MainChart from './components/MainChart';
import TinyLineChart from './components/TinyLineChart';
import RadChart from './components/RadChart';
import SimpleRadial from './components/SimpleRadial';

axios.defaults.baseURL = 'http://localhost:8080';

axios.get('/user/12').then((response) => {
    console.log(response.data)
}).catch((error)=>{
  console.log(error)
  } 
)
;

function App() {

  return (
    <div className="App">
        <Header />
        <main>
          <LeftNav />
          <article>
            <Welcomer />
            <MainChart />
            <div className='LittleCharts'>
           <TinyLineChart />
            <RadChart />
            <SimpleRadial />
            </div>
          </article>
        </main>
    </div>
  );
}

export default App;
 
