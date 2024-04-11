export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    // Verify data types
    if (typeof this._name !== 'string' || typeof this._length !== 'number' || !Array.isArray(this._students)) {
      throw new Error('Invalid attribute type');
    }
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(newLen) {
    if (typeof newLen === 'number') {
      this._length = newLen;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // Getter and Setter for Students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
