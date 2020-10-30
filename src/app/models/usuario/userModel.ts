export class Usuario {
    public id: String;
    public nombre: String;
    public apellido: String;
    public edad: Number;
    public email: String;


    constructor(
        id, nombre, apellido, edad, email
    ){
        this.id = id;
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.email = email
    }

}