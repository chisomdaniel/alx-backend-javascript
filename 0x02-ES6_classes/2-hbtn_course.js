export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }

    if (typeof length === 'number') {
      this._number = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    }

    if (Array.isArray(students)) {
      for (const each of students) {
        if (typeof each === 'string') {
          continue;
        } else {
          throw new Error('TypeError: Students must be a list of strings only');
        }
      }
      this._students = students;
    } else {
      throw new Error('TypeError: Students must be a list');
    }
  }

  set name(n) {
    if (typeof n === 'string') {
      this._name = n;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  set length(num) {
    if (typeof num === 'number') {
      this._number = num;
    } else {
      throw new Error('TypeError: Length must be a number');
    }
  }

  set students(strList) {
    if (Array.isArray(strList)) {
      for (const each of strList) {
        if (typeof each === 'string') {
          continue;
        } else {
          throw new Error('TypeError: Students must be a list of strings only');
        }
      }
      this._students = strList;
    } else {
      throw new Error('TypeError: Students must be a list');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
