"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(fullname) {
        this.fullname = fullname;
    }
    Student.prototype.getFullname = function () {
        return this.fullname;
    };
    return Student;
}());
var student = new Student("This is my full name");
console.log(student.getFullname());
//# sourceMappingURL=Student.js.map