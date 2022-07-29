export default class HolbertonCourse {
    constructor(name, length, students) {
	if (typeof name !== 'string') throw TypeError('Name must be string');
	if (typeof length !== 'number') throw TypeError('Length must be a number');
	if (students.constructor !== Array && students.every((e) => typeof e !== 'string')) throw TypeError('students must be an Array of strings');
	
	this._name = name;
	this._length = length;
	this._students = students;
    }

    get name() {
	return this._name;
    }
    set name(x) {
	if (typeof x !== 'string') throw TypeError('Name must be string');
	this._name = x;
    }
    get length() {
	return this._length;
    }
    set length(x) {
	if (typeof x !== 'number') throw TypeError('Length must be a number');
	this._length = x;
    }
    get students() {
	return this._students;
    }
    set students(x) {
	if (students.constructor !== Array && students.every((e) => typeof e !== 'string')) throw TypeError('students must be an Array of strings');
	this._students = x;
}
