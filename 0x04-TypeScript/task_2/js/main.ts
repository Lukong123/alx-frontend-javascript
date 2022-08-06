interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attribute: string]: any;
  }

interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string =>`${firstName[0]}. ${lastName}`;

// task 4 student class

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;

}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currenly Working";
    }

    displayName(): string {
        return this.firstName
    }
}
