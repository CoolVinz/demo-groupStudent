// for parameter this should be the best practice not just function groupStudents( students, numGroups )
function groupStudents({ students, numGroups }) {
  let numStudents = students.length;

  let groups = new Array(numGroups);

  for (let i = 0; i < numGroups; i++) {
    groups[i] = [];
  }

  for (let j = 0; j < numStudents; j++) {
    let groupIndex = j % numGroups;
    groups[groupIndex].push(students[j]);
  }

  return groups;
}

export default groupStudents;
