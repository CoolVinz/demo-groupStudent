import studentList from "./studentList";
import "./student.css";
import groupStudents from "./studentgroup";
import React, { useState, useEffect } from "react";

function Students(props) {
  // never use let to declear variable inside react function it will lead to the future bug, instead please use useState.
  let avatar = "https://i.pravatar.cc/150?img=";

  const studentNum = props.num;
  const numOfGroup = props.numOfStdGroup;
  const studentClassList = studentList.slice(0, studentNum);
  const randStudentList = studentClassList.sort(() => Math.random() - 0.5);
  const [showList, setShowList] = useState(studentClassList);
  const [isGroup, setIsGroup] = useState(false);
  // when calling fucntion should be declear argument clearly so you don't mess up later
  // instead of groupStudents(randStudentList,numOfGroup) should do as below (it's the best practice for calling function)
  const stdGroup = groupStudents({
    students: randStudentList,
    numGroups: numOfGroup,
  });

  const toggleGroup = () => {
    setIsGroup((value) => !value);
    console.log("Toggle");
    console.log(isGroup);
  };

  // any function that not be called should comment it out
  // const handleGroup = (group) => {
  //   for (let i = 0; i < group.length; i++) {
  //     console.log("Group " + (i + 1) + ": " + group[i]);
  //   }
  // };

  return (
    <>
      <div className="student-title">
        <h1>Student</h1>
        <p> {studentClassList.length} in the classroom</p>
        <p> num in props {studentNum}</p>
        <button onClick={() => toggleGroup()}>
          {" "}
          {isGroup ? "ungroup" : "group"}
        </button>
      </div>
      <div className="student-card">
        {isGroup
          ? stdGroup.map((subArray, index) => (
              <div className="student-group" key={index}>
                <p>Group{index + 1}</p>
                {subArray.map((st) => (
                  <div className="student-item" key={st.id}>
                    <img src={`${avatar}${st.id}`} className="student-avatar" />
                    <p>id :{st.id}</p>
                    <p>name: {st.name}</p>
                  </div>
                ))}
              </div>
            ))
          : showList.map((st) => (
              <div className="student-item" key={st.id}>
                <img src={`${avatar}${st.id}`} className="student-avatar" />
                <p>id :{st.id}</p>
                <p>name: {st.name}</p>
              </div>
            ))}
      </div>
    </>
  );
}

export default Students;
