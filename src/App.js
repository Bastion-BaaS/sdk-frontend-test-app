import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Collections from './components/Collections'
import RunCcf from './components/RunCcf';
import Files from './components/Files';
import Header from './components/Header';
import initialize from 'bastion-sdk';
import StripeDemo from './components/StripeDemo';

const bastion = initialize('https://reillyk.com/server/test123', 'iP2JFjhvokMjpS5uAu42l');

const App = () => {

  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='users' element={<Users bastion={bastion} />} />
          <Route path='collections' element={<Collections bastion={bastion} />} />
          <Route path='files' element={<Files bastion={bastion}  />} />
          <Route path='cloudcode' element={<RunCcf bastion={bastion}  />} />
          <Route path='stripe' element={<StripeDemo bastion={bastion}  />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
