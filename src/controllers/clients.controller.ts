import { Request, Response} from "express";
import {MovieService} from "../services/clients.service";
import { queriesPelicula } from "../models/queryfiltro";


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
   }

   //lease o entiendase Indice como posicion en un arreglo
   getByIndice=(req:Request,res:Response)=>{
     res.send(this.movieService.traerPeliculaxPosicion(req.params.posicion));
   }

   getByYear=(req:Request,res:Response)=>{
    res.send(this.movieService.traerPeliculaxYear(req.params.year));
   }

   getByID=(req:Request,res:Response)=>{
    res.send(this.movieService.traerPeliculaxID(req.params.id));
   }

   agregar=(req: Request,res:Response)=>{
    res.send(this.movieService.agregarPelicula(req.body));
   }
   
   modificar=(req:Request,res:Response)=>{
    res.send(this.movieService.modificarPelicula(req.params.id,req.body));
   }

   delete=(req:Request,res:Response)=>{
    res.send(this.movieService.borrarPelicula(req.params.id));
   }
}
