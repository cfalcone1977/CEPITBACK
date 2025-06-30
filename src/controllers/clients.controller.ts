import { Request, Response} from "express";
//import { Pelicula, leerArchivoPeliculas, guardarArchivoPeliculas, dataPath, buscarPosicion } from "../utils";
//import { existePelicula, busquedaxYear, busquedaxID, existeArchivo} from "../utils";
import {MovieService} from "../services/clients.service";
import { queriesPelicula } from "../models/queryfiltro";
//import { request } from "http";

/*
let nuevaPelicula: Pelicula={
    "id": "nueva",
    "title": "SuperMan",
    "year": 1980,
    "director": "No lo conozco",
    "duration": 221,
    "poster": "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp",
    "genre": [
      "Ciecia Ficción"
    ],
    "rate": 9.0
  }*/



//body:JSON.stringify(nuevaPelicula);

export class ClientController{

   constructor(private movieService=new MovieService()){
   }
   
   get =(req:Request, res:Response) =>{
       if ((req.query.genero) || (req.query.year) || (req.query.director) || (req.query.titulo)){
                              const filtros: queriesPelicula= req.query as unknown as queriesPelicula;
                               res.send(this.movieService.filtrar(filtros));
                            } else {
                                 res.send(this.movieService.traerPeliculas());
                                   }
       
       
       /*if (existeArchivo(dataPath)){
                                   const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                   if (req.query.titulo){
                                                        console.log("usted ingreso un query param titulo!!!");
                                                        console.log(req.query.titulo);
                                                        }
                                   console.warn("GET - PELICULAS TRAIDAS EXITOSAMENTE");
                                   res.json(arregloPeliculas);
                                   }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }

   //lease o entiendase Indice como posicion en un arreglo
   getByIndice=(req:Request,res:Response)=>{
     res.send(this.movieService.traerPeliculaxPosicion(req.params.posicion));

      /*if (existeArchivo(dataPath)){
                                   const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                   const existe:boolean = existePelicula(arregloPeliculas,Number(req.params.posicion));
                                    if (existe) {
                                                  res.json(arregloPeliculas[Number(req.params.posicion)]);
                                                  console.warn("Pelicula x INDICE ENCONTRADA");
                                                } else res.json({message:"Pelicula Inexistente"});
                                   }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/

   }
   getByYear=(req:Request,res:Response)=>{
    res.send(this.movieService.traerPeliculaxYear(req.params.year));

   /*if (existeArchivo(dataPath)){
                            const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                            const peliculasxYear:Pelicula[]=busquedaxYear(arregloPeliculas,Number(req.params.year));
                            if (peliculasxYear.length>0){
                                                          res.json(peliculasxYear);
                                                          console.warn("Pelicula x YEAR ENCONTRADA");
                                                        } else res.json({message:"No existe/n pelicula/s con ese Año"});
                               }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }
   getByID=(req:Request,res:Response)=>{
    res.send(this.movieService.traerPeliculaxID(req.params.id));
    
     /*if (existeArchivo(dataPath)){
                                const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                const peliculasxID:Pelicula[]=busquedaxID(arregloPeliculas,req.params.id);
                                if (peliculasxID.length>0){
                                                            res.json(peliculasxID);
                                                            console.warn("Pelicula x ID ENCONTRADA");
                                                          } else res.json({message:"No existen peliculas con ese ID"});
                                 }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }


   agregar=(req: Request,res:Response)=>{
    res.send(this.movieService.agregarPelicula(req.body));
   /* if (existeArchivo(dataPath)){
                                  const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                  arregloPeliculas.push(req.body);
                                  guardarArchivoPeliculas(arregloPeliculas);
                                  res.json({message:"Pelicula agregada exitosamente"});
                                  console.warn("Pelicula AGREGADA EXITOSAMENTE");
                                }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }
   modificar=(req:Request,res:Response)=>{
    res.send(this.movieService.modificarPelicula(req.params.id,req.body));
   /* 
   if (existeArchivo(dataPath)){
                              const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());    
                              const posicion:number= buscarPosicion(arregloPeliculas,req.params.id);
                              if (posicion!=-1){
                                                arregloPeliculas.splice(posicion,1,req.body);
                                                guardarArchivoPeliculas(arregloPeliculas);
                                                res.json({message:"Pelicula MODIFICADA EXITOSAMENTE"});
                                                console.warn("Pelicula MODIFICADA EXITOSAMENTE");                      
                                               }else res.json({message:"IDENTIFICADOR INEXISTENTE"});
                               }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }

   delete=(req:Request,res:Response)=>{
    res.send(this.movieService.borrarPelicula(req.params.id));
  /*  
   if (existeArchivo(dataPath)){
                                  const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                  const posicion:number= buscarPosicion(arregloPeliculas,req.params.id);
                                  if (posicion!=-1){
                                                    arregloPeliculas.splice(posicion,1);
                                                    guardarArchivoPeliculas(arregloPeliculas);
                                                    res.json({message:"Pelicula ELIMINADA EXITOSAMENTE"});
                                                    console.warn("Pelicula ELIMINADA EXITOSAMENTE");
                                                   }else res.json({message:"IDENTIFICADOR INEXISTENTE"});
                                  
                               }else res.json({message:"Ruta o Archivo INEXISTENTE"});*/
   }
   
   
  // filtrarTitulo=(req:Request, res:Response)=>{
  //  if (existeArchivo(dataPath)){
  //                                console.log(req.query.titulo);
  //                                const arregloPeliculas: Pelicula[]= (leerArchivoPeliculas());
                                  /*
                                  const peliculasfiltroTitulo:Pelicula[]=arregloPeliculas.filter((elemento)=>{
                                                                                        elemento.title===req.query.titulo;
                                                                                              });*/
  //                               }else res.json({message:"Ruta o Archivo INEXISTENTE"});
 //  }


}
