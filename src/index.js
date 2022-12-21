import React from 'react';
import ReactDOM from 'react-dom/client';
import WorkoutContext from './Context/WorkoutContext';
import App from './App';
import './index.css'
import  Authcontext  from './Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authcontext>
    <WorkoutContext>
    <App />
  </WorkoutContext>

  </Authcontext>

);


