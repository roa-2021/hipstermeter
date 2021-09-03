import React, {useState} from 'react'
import {addName} from '../apis/spotify'


export const AddForm = () => {
    const [formData, setFormData] = useState({ name: ''})
    console.log(formData)

    const changeHandler = (e) => {
        const newName = {...formData, [e.target.name] : e.target.value}
        setFormData(newName)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        return addName(formData)
    
    }

    return (
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={(e) => changeHandler(e)}></input>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
    )}

export default AddForm