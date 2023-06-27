import studentList from "./studentList"
import './student.css'
import groupStudents from "./studentgroup";
import React, { useState, useEffect } from 'react';



function Students(props) {
    let avatar = 'https://i.pravatar.cc/150?img=';
    
    const studentNum = props.num;
    const numOfGroup = props.numOfStdGroup;
    const studentClassList = studentList.slice(0, studentNum);
    const randStudentList = studentClassList.sort(() => Math.random() - 0.5);
    const stdGroup = groupStudents(randStudentList,numOfGroup)

    const [showList, setShowList] = useState(studentClassList);
    const [isGroup, setIsGroup] = useState(false);
    const toggleGroup = () => {
      setIsGroup(value => !value);
      console.log("Toggle");
      console.log(isGroup);
    };
    
    
    const handleGroup = (group) => {
      //for (let i = 0; i < stdGroup.length; i++) {
      //   console.log("Group " + (i + 1) + ": " + stdGroup[i]);
      // }

       for (let i = 0; i < group.length; i++) {
         console.log("Group " + (i + 1) + ": " + group[i]);
         
       }
    };
    console.log(handleGroup(stdGroup));
    
    
    
    
    return (
      <>
        <div className="student-title">
          <h1>Student</h1>
          <p> {studentClassList.length} in the classroom</p>
          <p> num in props {studentNum}</p>
          <button onClick={() => toggleGroup()}> {isGroup ? 'ungroup' : 'group'}</button>
        </div>
        <div className="student-card">
           {isGroup ? 
            stdGroup.map((subArray, index) => (
              <div className="student-group" key={index}>
                <p>Group{index+1}</p>
                {subArray.map((st) => (
                <div className="student-item" key={st.id}>
                <img src= {`${avatar}${st.id}`} className="student-avatar"/>
               <p>id :{st.id}</p>
               <p>name: {st.name}</p>
                </div>
                ))}
                </div>
                )):showList.map((st) => (
               <div className="student-item" key={st.id}>
               <img src= {`${avatar}${st.id}`} className="student-avatar"/>
               <p>id :{st.id}</p>
               <p>name: {st.name}</p>
                </div>
            
            ))}
       

            
              
          
        </div>
        
        
        
      </>
    )
  }
  
  export default Students
  