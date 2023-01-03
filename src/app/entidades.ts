export class Usuario {
    username: string=" ";
    password : string=" " ;
    confirmPassword? : string;
}
export class Cliente {
    id!:number;
    tipoIdentificacion: string="";
    identificacionNumero: string="";
    nombre: string="";
    direccion: string="";
    telefono: string="";
    correoElectronico: string="";
}

export class Servicio {
    id!:number;
    descripcion: string="";
    precioUnitario!:number;
    usuarioId!: number;
}