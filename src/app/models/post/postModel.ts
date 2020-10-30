export class Post {
    public id:String;
    public name: String;
    public description: String;
    public date: String;


    constructor(
        id, name, description, date
    ){
        this.id = id;
        this.name = name,
        this.description = description,
        this.date = date
    }

}