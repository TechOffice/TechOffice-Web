import { ClassRoom } from "./ClassRoom";

class Student{
	private fullname: string;
	private classroom: ClassRoom;
	public constructor(fullname: string){
		this.fullname = fullname;
	}
	public getFullname(): string{
		return this.fullname;
	}
}

var student = new Student("This is my full name");
console.log(student.getFullname());