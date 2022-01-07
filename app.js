const yargs = require('yargs')
//add
const details = require('./details')
yargs.command({
    command:'add',
    describe:'Add data of students',
    builder:{
        id:{
            describe:'This is id of student',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name of student',
            demandOption:true,
            type:'string'
        },
        grads:{
            describe:'This is grads of student',
            demandOption:true,
            type:'array'
        },
        // total:{
        //     describe:'This is total of student',
        //     type:'number'
        // },
     
    },
    handler:(x)=>{
 
        details.addStudent(x.id,x.name,x.grads)

        //  console.log(x.grads[0] + x.grads[1]+ x.grads[2])



     
    }
})

delete
yargs.command({
    command:'delete',
    describe:'Delete student',
    builder:{
        id:{
            describe:'This is id description in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{

        details.deleteStudent(x.id)
    }
})

//read
yargs.command({
    command:'read',
    describe:'Read student',
    builder:{
    id:{
        describe:'This is id in read command',
        demandOption:true,
        type:'number'
    }
    },
    handler:(x)=>{

        details.readStudents(x.id )


        

        
    }
})

// listAll
yargs.command({
    command:"list",
    describe:'List students',
    handler:()=>{
        details.listStudents()

    }
})


yargs.parse()
