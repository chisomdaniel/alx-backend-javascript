const fs = require('fs/promises');

async function countStudents(path) {
  try {
    let data = await fs.readFile(path, { encoding: 'utf8' });
    data = data.split('\n');

    const csList = [];
    const sweList = [];
    let studentCount = 0;
    let countCS = 0;
    let countSWE = 0;
    data.forEach((value) => {
      const dataTray = value.split(',');
      if (dataTray[dataTray.length - 1] === 'CS') {
        studentCount += 1;
        countCS += 1;
        csList.push(dataTray[0]);
      } else if (dataTray[dataTray.length - 1] === 'SWE') {
        studentCount += 1;
        countSWE += 1;
        sweList.push(dataTray[0]);
      }
    });
    console.log(`Number of students: ${studentCount}`);
    console.log(`Number of students in CS: ${countCS}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${countSWE}. List: ${sweList.join(', ')}`);

    return data;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
