export class ClassRoom {
    private fullname: string;
    public constructor(fullname: string){
		this.fullname = fullname;
	}
	public getFullname(): string{
		return this.fullname;
	}
}