import React, {useEffect, useState} from 'react'
import { EmployeeList } from './data.js'
import { Link } from "react-router-dom";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(EmployeeList)
    const [showEmployeeForm, setShowEmployeeform] = useState(false)
    const [ currentEmployee, setCurrentEmployee] = useState({})

    useEffect(() => {
        setEmployeeList(employeeList)
    }, [employeeList])

    //to be done
    const addEmployee = () => {
        setShowEmployeeform(true)
    }

    const editEmployee = (index) => {
        setShowEmployeeform(true)
        setCurrentEmployee(employeeList[index])
    }

    async function deleteEmployee(index) {
        employeeList.splice(index, 1)
        setEmployeeList(employeeList)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const {fname, lname, designation, dob, experience, profilepic}  = document.forms[0]
        console.log('e in handleSubmit ', fname.value)
        let count = employeeList.length
        const newEmployee = {
            fName: fname.value,
            lName: lname.value,
            dob: dob.value,
            designation: designation.value,
            imgUrl: profilepic.value,
            experience: experience.value,
            id: count + 1,
        }
        const updateEmployeeList = [...employeeList, newEmployee]
        setEmployeeList(updateEmployeeList)
    }

    const handleChange = (e) => {
        console.log('e', e.target.value)
        const updatecurrentValue = {...currentEmployee, [e.target.name]: e.target.value}
        setCurrentEmployee(updatecurrentValue)
    }

    return (
        <>
            <div style={headingStyle}>List of Employee Details</div>
            {employeeList.length > 0 && employeeList.map((employee, index) => {
                return (
                    <div key={index} style={divStyle}>
                        <span>{`Name : ${employee.fName} ${employee.lName}`}</span>
                        <span>{`DOB : ${employee.dob}`}</span>
                        <span>{`Designation : ${employee.designation}`}</span>
                        <span>{`Experience : ${employee.experience}`}</span>
                        <span>{`Profile Photo :`} <img src={employee.imgUrl} alt='img-alt-text'></img> </span>
                        <div>
                            <div>
                            <button onClick={() => editEmployee(index)}>Edit</button>
                            <Link to={`/edit-user/${employee.id}`}>
                                <button>Edit</button>
                            </Link>
                            </div>
                            <button onClick={() => deleteEmployee(index)}>Delete</button>
                        </div>
                    </div>
                )
            })}
            <div style={operationsStyle}>
                <button onClick={addEmployee}>Add</button>
            </div>
            {showEmployeeForm && (
                <form style={divStyle} onSubmit={handleFormSubmit}>
                    First Name : <input type='text' name='fname' placeholder='fname' value={currentEmployee.fName} onChange={handleChange}/>
                    Last Name : <input type='text' name='lname' placeholder='lname' value ={currentEmployee.lName} onChange={handleChange} />
                    DOB : <input type='text' name='dob' placeholder='date of birth' value={currentEmployee.dob} onChange={handleChange} />
                    Designation: <input type='text' name='designation' placeholder='designation' value={currentEmployee.designation} onChange={handleChange} />
                    Experience: <input type='text' name='experience' placeholder='experience' value={currentEmployee.experience} onChange={handleChange} />
                    Profile photo : <input type='file' name='profilepic' placeholder='profile photo' onChange={handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
            )}
        </>
    )

}

const headingStyle ={
    font: '700',
    padding: '5px',
}
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '5px',
    width: '500px',
    margin: '5px',
}
const spanStyle = {
    padding: '5px',
}
const operationsStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px'
}

export default Home;