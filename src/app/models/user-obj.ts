export class UserObj {
    public uid:string;
    public uEmail:string;
    public uPassword :string;
    public role:string;
    public active :string;
    public contact :string;

    
    constructor() {
        this.uid = "U" + Math.round((Math.random()*9000));
        this.role ="User";
        this.active="True"
    }
}
