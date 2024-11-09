import { students } from './sample_data/student';
import houses from './sample_data/house';
import createId from './createStuID';
import { studentsOnDom } from './htmlComp';

// sorts student to a house and then place them in the students array
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest,
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
