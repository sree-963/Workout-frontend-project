import { createContext, useState } from 'react'
import axios from 'axios'
import {useAuthContext} from '../Hooks/useAuthContext'

export const Data = createContext();

const WorkOutContext = ({ children }) => {

  const {user}=useAuthContext();

  //Get Request State
  const [workouts, setWorkouts] = useState(null)

  // Get Request Function
  const getworkout = async () => {
    const response = await axios.get("http://localhost:7000/api/workouts",{
      headers:{
        "Authorization":`Bearer ${user.token}`
      }
    })

    const Data = response.data
    console.log(Data)
    setWorkouts(Data)
  }


  // Post Request State
  const [form, setForm] = useState({
    title: '',
    reps: '',
    load: ''
  })


  //Delete Request State
  const deleteworkout = async (_id) => {
    await axios.delete(`http://localhost:7000/api/workouts/${_id}`,{
      headers:{
        "Authorization":`Bearer ${user.token}`
      }
    })
    getworkout();
  }

  // Update Request
  const [updateform, setUpdateform] = useState({
    _id: null,
    title: '',
    reps: '',
    load: ''
  })

  const toggleupdate = (item) => {
    setUpdateform({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load
    })

  }

  return (
    <>
      <Data.Provider value={{ workouts, setWorkouts, form, setForm, getworkout, deleteworkout, toggleupdate, updateform, setUpdateform }}>
        {
          children
        }
      </Data.Provider>
    </>
  )
}

export default WorkOutContext