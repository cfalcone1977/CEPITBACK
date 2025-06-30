import * as fs from "fs";
import * as path from "path";
import { Pelicula } from "../models/pelicula";


export class MoviesRepository{

 private dataPath = path.join(__dirname,"movies.json");


 existeArchivo():boolean{
    if (fs.existsSync(this.dataPath)) return true;
                                else return false;
 }

 leerArchivoPeliculas():Pelicula[]{
    const data=fs.readFileSync(this.dataPath,"utf-8");
    let dataArreglo:Pelicula[];
    dataArreglo=JSON.parse(data);
    return dataArreglo;
 }

 guardarArchivoPeliculas(data:Pelicula[]){
    fs.writeFileSync(this.dataPath, JSON.stringify(data));
 }

 busquedaxID(Peliculas:Pelicula[],ID:string):Pelicula[]{
    const peliculasxID:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.id===ID;
                                    })
    return peliculasxID;
 }

 buscarPosicion(Peliculas:Pelicula[],ID:string):number{
    for (let i = 0; i < Peliculas.length; i=i+1) {
       if (Peliculas[i].id===ID){
                                 return i
                                }
       }
    return -1;
}

existePelicula(Peliculas:Pelicula[],posicion:number):boolean{
    if (posicion>=0 && posicion< Peliculas.length){
                                    return true;
                                    }
    return false;
}  
busquedaxYear(Peliculas:Pelicula[],year:number):Pelicula[]{
    const peliculasxYear:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.year===year;
                                    })
    return peliculasxYear;
}
busquedaxTitulo(Peliculas:Pelicula[],titulo:string):Pelicula[]{
    const peliculasxTitulo:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.title===titulo;
                                    });
    return peliculasxTitulo;                                  
}
busquedaxDirector(Peliculas:Pelicula[],director:string):Pelicula[]{
    const peliculasxDirector:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.director===director;
                                    });
    return peliculasxDirector;                                  
}
busquedaxGenero(Peliculas:Pelicula[],genero:string):Pelicula[]{
    const peliculasxGenero:Pelicula[]=Peliculas.filter((elemento)=>{
                                 for (let i = 0; i < elemento.genre.length; i=i+1) {
                                     console.log(elemento.genre[i]);
                                     if (elemento.genre[i]===genero) return elemento;
                                 }
                                    });
    return peliculasxGenero;                                                        
}
}