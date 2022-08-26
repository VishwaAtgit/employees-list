import React from "react";

const UpdateUser = () => {

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
    
    return <div>
        <form style={divStyle} onSubmit={handleFormSubmit}>
                    First Name : <input type='text' name='fname' placeholder='fname' value={currentEmployee.fName} onChange={handleChange}/>
                    Last Name : <input type='text' name='lname' placeholder='lname' value ={currentEmployee.lName} onChange={handleChange} />
                    DOB : <input type='text' name='dob' placeholder='date of birth' value={currentEmployee.dob} onChange={handleChange} />
                    Designation: <input type='text' name='designation' placeholder='designation' value={currentEmployee.designation} onChange={handleChange} />
                    Experience: <input type='text' name='experience' placeholder='experience' value={currentEmployee.experience} onChange={handleChange} />
                    Profile photo : <input type='file' name='profilepic' placeholder='profile photo' onChange={handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
    </div>
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
