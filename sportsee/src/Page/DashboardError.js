import React from 'react';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';

function DashboardError(props) {
    
  return (
    <div className="App">
        <Header />
          <main>
         <LeftNav />
          <div className='error'>
              <h2>Oops something went wrong with the datas</h2>
          </div>
        </main>
      </div>
  )
}

export default DashboardError;