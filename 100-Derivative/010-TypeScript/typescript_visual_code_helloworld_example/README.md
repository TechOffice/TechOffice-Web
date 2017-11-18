# TypeScript Hello World Example

## Prerequistie
* NodeJs
* TypeScript

**Install TypeScript**
```
npm install -g typescript
```

## Example
**helloworld.ts**
```
class Student{
	private fullname: string;
	public constructor(fullname: string){
		this.fullname = fullname;
	}
	public getFullname(): string{
		return this.fullname;
	}
}

var student = new Student("This is my full name");
console.log(student.getFullname());
```

**Compile**
```
tsc helloworld.ts
```

**Execute**
```
node helloworld.js
``

