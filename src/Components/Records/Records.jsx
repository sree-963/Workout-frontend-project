import React from 'react'
import { useEffect, useContext } from 'react'
import { Data } from '../../Context/WorkoutContext'
import './Records.css'
import {useAuthContext} from '../../Hooks/useAuthContext'


const Records = () => {
    const {user}=useAuthContext();
    const { workouts, getworkout,deleteworkout,toggleupdate } = useContext(Data)

    useEffect(() => {
      if(user){
        getworkout()
      }
    },[user,getworkout])
    return (
        <div className='records'>
            {
                workouts && workouts.map((item) =>

                    <div className='record' key={item._id}>
                        <h1>{item.title}</h1>
                        <p>Reps:{item.reps}</p>
                        <p>Load (In Kg):{item.load}</p>
                        <div className='icons'>
                          <img src={require('../../Assests/pen.png')} onClick={() => toggleupdate(item)} alt="" /> {' '}
                          <img src={require('../../Assests/remove.png')}onClick={() => deleteworkout(item._id)} alt="" />
                    </div>
                    </div>
                )}
        </div>
    )
}

export default Records
