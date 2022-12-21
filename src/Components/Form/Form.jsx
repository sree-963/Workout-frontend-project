import { useContext } from 'react'
import axios from 'axios';
import { Data } from '../../Context/WorkoutContext'
import './Form.css'
import {useAuthContext} from '../../Hooks/useAuthContext'


const Form = () => {
  const {user}=useAuthContext();

  const { workouts, setWorkouts, form, setForm, getworkout, updateform, setUpdateform } = useContext(Data)


  // Create Form FUnctions
  const updateformfield = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }
  const createWorkout = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:7000/api/workouts', form,
    { headers:{ 
        "Authorization": `Bearer ${user.token}`
      }
    })
    setWorkouts([...workouts, response.data])
    setForm({
      title: '',
      reps: '',
      load: ''
    })
    getworkout()
  }

  // Update Form Functions

  const updateworkfield = (e) => {
    const { name, value } = e.target;
    setUpdateform({
      ...updateform,
      [name]: value
    })
  }

  const updateworkout = async (e) => {
    e.preventDefault()
    const { _id, title, reps, load } = updateform
    await axios.patch(`http://localhost:7000/api/workouts/${_id}`, { title, reps, load },{
      headers:{
        "Authorization":`Bearer ${user.token}`
      }
    })
    getworkout();
    setUpdateform({
      _id: null,
      title: '',
      reps: '',
      load: ''
    })
  }

  return (
    <div className='form'>
      {/* Create Form */}
      <div className='record-form'>
        {!updateform._id && <form onSubmit={createWorkout}>
          <h1>Create Record</h1>
          <div className="fields">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' value={form.title} onChange={updateformfield} />
          </div>
          <div className="fields">
            <label htmlFor="reps">Reps</label>
            <input type="tel" name='reps' value={form.reps} onChange={updateformfield}  autoComplete='off'/>
          </div>
          <div className="fields">
            <label htmlFor="load">Load</label>
            <input type="tel" name='load' value={form.load} onChange={updateformfield} autoComplete='off' />
          </div>

          <button >Submit</button>
        </form>}
      </div>

      {/* Update Form */}
      <div className='record-form'>
        {updateform._id && <form onSubmit={updateworkout} >
          <h1>Edit Record</h1>
          <div className="fields">
            <label htmlFor="title" >Title:</label>
            <input type="text" name='title' value={updateform.title} onChange={updateworkfield} />
          </div>
          <div className="fields">
            <label htmlFor="reps">Reps:</label>
            <input type="tel" name='reps' value={updateform.reps} onChange={updateworkfield} autoComplete='off' />
          </div>
          <div className="fields"><label htmlFor="load">Load (In Kg):</label>
            <input type="tel" name='load' value={updateform.load} onChange={updateworkfield}  autoComplete='off'/>
          </div>
          <button >Update</button>
        </form>}
      </div>
    </div>
  )
}

export default Form
