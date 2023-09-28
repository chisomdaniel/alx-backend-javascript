export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw 'TypeError: Name must be a string';
    }

    if (typeof length === 'number') {
      this._number = length;
    } else {
      throw 'TypeError: Length must be a number';
    }

    if (Array.isArray(students)) {
      for (let each of students) {
        if (typeof each === 'string') {
          continue;
        } else {
          throw 'TypeError: Students must be a list of strings only';
        }
      }
      this._students = students;
    } else {
      throw 'TypeError: Students must be a list';
    }
  }

  set name(n) {
    if (typeof n === 'string') {
      this._name = n;
    } else {
      throw 'TypeError: Name must be a string';
    }
  }

  set length(num) {
    if (typeof num === 'number') {
      this._number = num;
    } else {
      throw 'TypeError: Length must be a number';
    }
  }

  set students(strList) {
    if (Array.isArray(strList)) {
      for (let each of strList) {
        if (typeof each === 'string') {
          continue;
        } else {
          throw 'TypeError: Students must be a list of strings only';
        }
      }
      this._students = strList;
    } else {
      throw 'TypeError: Students must be a list';
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
