export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Cpp = new Subjects.Java(); 
export const react: Subjects.Cpp = new Subjects.React(); 

export const cTeacher: Subjects.Teacher = {
    firstName: 'Lukong',
    lastName: 'Anne',
    experienceTeachingC: 3,
}

console.log("C++")
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log("Java")
cpp.setTeacher(cTeacher);
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

console.log("React")
cpp.setTeacher(cTeacher);
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())