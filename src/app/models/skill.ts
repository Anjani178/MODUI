export class Skill {
    public sId: string;
    public sName : string;
    public toc : string;
    public preReq : string
    public fees:number
    public duration :string

    constructor(){
        this.sId = "S" + Math.round((Math.random()*9000));
}
}

