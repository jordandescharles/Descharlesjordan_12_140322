import '../App.css';
import React from 'react';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import Welcomer from '../components/Welcomer';
import MainChart from '../components/charts/MainChart';
import TinyLineChart from '../components/charts/TinyLineChart';
import RadChart from '../components/charts/RadChart';
import SimpleRadial from '../components/charts/SimpleRadial';
import RightIndicator from '../components/RightIndicator';
import ImgCalorie from '../img/calories-icon.png';
import ImgLip from '../img/fat-icon.png';
import ImgGlu from '../img/carbs-icon.png';
import ImgProt from '../img/protein-icon.png';



export default function Dashboard(props) {
   
  return (
    <div className="App">
        <Header />
          <main>
         <LeftNav />
          <article className='bigBlock'>
            <div className='fullPage'>
              <Welcomer userData={props.data.userData}/>
            </div>

           <div className='flexCharts'>
                <div className='allCharts'>
                <MainChart userActivity={props.data.userActivity} />

                 <div className='LittleCharts'>
                 <TinyLineChart userAverage={props.data.userSession} />
                  <RadChart userPerformance={props.data.userPerformance} />
                 <SimpleRadial userData={props.data.userData} /> 
                </div>
              </div>  

              <article className='RightItems'>
               <RightIndicator img={ImgCalorie} data={props.data.userData._keyData.calorieCount + "kcal"} type={"Calories"} />
                <RightIndicator img={ImgProt} data={props.data.userData._keyData.proteinCount + "g"} type={"Protéines"} />
                <RightIndicator img={ImgGlu} data={props.data.userData._keyData.carbohydrateCount + "g"} type={"Glucides"} />
                <RightIndicator img={ImgLip} data={props.data.userData._keyData.lipidCount + "g"} type={"Lipides"} /> 
              </article> 

            </div>
          </article> 
        </main>
      </div>
  )
}
