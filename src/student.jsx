import studentList from "./studentList"
import './student.css'
import groupStudents from "./studentgroup";
import { useState, useEffect } from 'react';
import studentWithRandom from "./studentWithRandom";



function Students(props) {
    let avatar = 'https://i.pravatar.cc/150?img=';
    
    const studentNum = props.num;
    const numOfGroup = props.numOfStdGroup;
    const studentClassList = studentList.slice(0, studentNum);
    const [customGroup, setCustomGroup] = useState(1);
    const randStudentList = studentClassList.sort(() => Math.random() - 0.5);
    const stdGroup = groupStudents(randStudentList,customGroup)
    
    const [showList, setShowList] = useState(studentClassList);
    const [isGroup, setIsGroup] = useState(false);
    const toggleGroup = () => {
      setIsGroup(value => !value);
      
    };
    
    console.log(studentWithRandom(showList));
    const handleGroup = (e) => {
      setCustomGroup(e.target.value);
    };
    
    
    
    
    
    return (
      <>
        <div className="student-title">
          <h1>Student</h1>
          <p> {studentClassList.length} in the classroom</p>
          <p> num in props {studentNum}</p>
          <button onClick={() => toggleGroup()}> {isGroup ? 'ungroup' : 'group'}</button>
          <input type={isGroup ? "number" : "hidden"} value={customGroup} onChange={handleGroup}/>
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
                )):
                    showList.map((st) => (
                    <div className="student-item" key={st.id}>
                        <img src= {`${avatar}${st.id}`} className="student-avatar"/>
                        <p>id :{st.id}</p>
                        <p>name: {st.name}</p>
                    </div>
                    ))
                    
                
           }
          </div>
      </>
    )
  }
  
  export default Students
  

  // showList.map((st) => (
  //   <div className="student-item" key={st.id}>
  //   <img src= {`${avatar}${st.id}`} className="student-avatar"/>
  //   <p>id :{st.id}</p>
  //   <p>name: {st.name}</p>
  //    </div>

  // ))}