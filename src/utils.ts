import * as fs from "fs";
import * as path from "path";
import { Pelicula } from "./models/pelicula";
/*
export interface Pelicula{
  id: string;
  title: string;
  year: number;
  director: string;
  duration: number;
  poster: string;
  genre:string[];
  rate: number;
  synopsis?: string;
}*/

export const dataPath = path.join(__dirname,"../movies.json");

export function existeArchivo(rutaArchivo:string):boolean{
if (fs.existsSync(rutaArchivo)) return true;
                            else return false;
}

export function leerArchivoPeliculas():Pelicula[]{
  const data=fs.readFileSync(dataPath,"utf-8");
  let dataArreglo:Pelicula[];
  dataArreglo=JSON.parse(data);
  return dataArreglo;
}

export function guardarArchivoPeliculas(data:Pelicula[]){
   fs.writeFileSync(dataPath, JSON.stringify(data));
}


export function busquedaxID(Peliculas:Pelicula[],ID:string):Pelicula[]{
 const peliculasxID:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.id===ID;
                                    })
 return peliculasxID;
}

export function buscarPosicion(Peliculas:Pelicula[],ID:string):number{
   for (let i = 0; i < Peliculas.length; i=i+1) {
       if (Peliculas[i].id===ID){
                                 return i
                                }
       }
 return -1;
}


export function existePelicula(Peliculas:Pelicula[],posicion:number):boolean{
  if (posicion>=0 && posicion< Peliculas.length){
                                    return true;
                                    }
  return false;
}  

export function busquedaxYear(Peliculas:Pelicula[],year:number):Pelicula[]{
 const peliculasxYear:Pelicula[]=Peliculas.filter((elemento)=>{
                                 return elemento.year===year;
                                    })
 return peliculasxYear;
}
