const fs = require('fs')
//add
const addStudent = (id,name,grads) => {
    const students = loadStudents()  
    const duplicateTitle = students.find((student)=>{
    
        return student.id === id
    })
    console.log(duplicateTitle) 
 
    if(!duplicateTitle){
       students.push({  
            id,
            name,
            grads,
          //total
        })
      
        saveStudents(students)  
        console.log('student is saved successfuly')
    }
    else{
        console.log('Error ,this student is already saved')
    }
}
const loadStudents = () =>{

    try{

        const dataBuffer = fs.readFileSync('students.json').toString()
       
        return JSON.parse(dataBuffer)  
    }
    catch(e){
        return []
    }

}

const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}
// total of grades
// const total = 0;
// students.grads.forEach((el) => {
//   total = el + total;
//   return total
// })


// let total = ()=>{return student.grads[0] +student.grads[1] +student.grads[2] }

////////////////////////////////////////////////////////////////////////////////

// delete 
const deleteStudent = (id)=>{
    const students = loadStudents()
    const studentsToKeep = students.filter((student)=>{
      
        return student.id !== id
    })
 
       if(students.length !== studentsToKeep.length){
            saveStudents(studentsToKeep)
        console.log('this student is removed')  
       }
       else {
           console.log('this id is found.. Please try again')
       }

}

// /////////////////////////////////////////////////////////////////////////////////

// read

const readStudents = (id) =>{
    const students = loadStudents()
    const student = students.find((student)=>{
        return student.id === id
    })




    if(student){
        console.log(student)
   
    }
    else{
        console.log('this id is not found')
    }
}

//list
const listStudents = () =>{
    const students = loadStudents()
    students.forEach((student)=>{
          console.log('Student id is ' + student.id,' , Student Name is ' + student.name,' , Student grads ' + student.grads)

     
    })
}





module.exports = {
    addStudent,
    deleteStudent,
    readStudents,
    listStudents ,
    

}
