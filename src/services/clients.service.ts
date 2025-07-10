import { Pelicula } from "../models/pelicula";
import { MoviesRepository } from "../repositories/clients.repository";
import { queriesPelicula } from "../models/queryfiltro";



export class MovieService{
 
   constructor(private movieRepository = new MoviesRepository){
   }
  
   traerPeliculas(){
       if (this.movieRepository.existeArchivo()){
                                   const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                                   console.warn("GET - PELICULAS TRAIDAS EXITOSAMENTE");
                                   return arregloPeliculas;
                                   }else return {message:"Error en Servidor(Ruta o Archivo INEXISTENTE)"};
   }

   traerPeliculaxPosicion(posicion:string){
      if (this.movieRepository.existeArchivo()){
                                   const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                                   const existe:boolean = this.movieRepository.existePelicula(arregloPeliculas,Number(posicion));
                                    if (existe) {
                                                  console.warn("Pelicula x INDICE ENCONTRADA");
                                                  const arregloPeliculaxPosicion:Pelicula[]=[];
                                                  arregloPeliculaxPosicion.push(arregloPeliculas[Number(posicion)]);
                                                  return(arregloPeliculaxPosicion);
                                                } else return({message:"Pelicula Inexistente"});
                                   }else return({message:"Ruta o Archivo INEXISTENTE"});

   }

   traerPeliculaxYear(year:string){
    if (this.movieRepository.existeArchivo()){
                            const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                            const peliculasxYear:Pelicula[]=this.movieRepository.busquedaxYear(arregloPeliculas,Number(year));
                            if (peliculasxYear.length>0){
                                                          console.warn("Pelicula x YEAR ENCONTRADA");                                
                                                          return(peliculasxYear);
                                                        } else return({message:"No existe/n pelicula/s con ese Año"});
                               }else return({message:"Error en Servidor, Ruta o Archivo INEXISTENTE"});
   }

   traerPeliculaxID(identificador:string){
     if (this.movieRepository.existeArchivo()){
                                const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                                const peliculasxID:Pelicula[]=this.movieRepository.busquedaxID(arregloPeliculas,identificador);
                                if (peliculasxID.length>0){
                                                            console.warn("Pelicula x ID ENCONTRADA");                                    
                                                            return(peliculasxID);
                                                          } else return({message:"No existen peliculas con ese ID"});
                                 }else return({message:"Ruta o Archivo INEXISTENTE"});
   }

   agregarPelicula(pelicula:Pelicula){
    if (this.movieRepository.existeArchivo()){
                                  const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                                  arregloPeliculas.push(pelicula);
                                  this.movieRepository.guardarArchivoPeliculas(arregloPeliculas);
                                  console.warn("Pelicula AGREGADA EXITOSAMENTE");                                 
                                  return({message:"Pelicula agregada exitosamente"});
                                }else return({message:"Ruta o Archivo INEXISTENTE"});
   }

   modificarPelicula(identificador:string,modificacion:Pelicula){
   if (this.movieRepository.existeArchivo()){
                              const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());    
                              const posicion:number= this.movieRepository.buscarPosicion(arregloPeliculas,identificador);
                              if (posicion!=-1){
                                                arregloPeliculas.splice(posicion,1,modificacion);
                                                this.movieRepository.guardarArchivoPeliculas(arregloPeliculas);
                                                console.warn("Pelicula MODIFICADA EXITOSAMENTE");                                                   
                                                return({message:"Pelicula MODIFICADA EXITOSAMENTE"});                  
                                               }else return({message:"IDENTIFICADOR INEXISTENTE"});
                               }else return({message:"Ruta o Archivo INEXISTENTE"});    
   }

   borrarPelicula(identificador:string){
   if (this.movieRepository.existeArchivo()){
                                  const arregloPeliculas: Pelicula[]= (this.movieRepository.leerArchivoPeliculas());
                                  const posicion:number= this.movieRepository.buscarPosicion(arregloPeliculas,identificador);
                                  if (posicion!=-1){
                                                    arregloPeliculas.splice(posicion,1);
                                                    this.movieRepository.guardarArchivoPeliculas(arregloPeliculas);
                                                    console.warn("Pelicula ELIMINADA EXITOSAMENTE");                                                   
                                                    return({message:"Pelicula ELIMINADA EXITOSAMENTE"});
                                                   }else return({message:"IDENTIFICADOR INEXISTENTE"});
                                  
                               }else return({message:"Ruta o Archivo INEXISTENTE"});    
   }
   filtrar(argumentos:queriesPelicula){
    console.log(argumentos.titulo);
    console.log(argumentos.year);
    console.log(argumentos.director);
    console.log(argumentos.genero);
    let arregloPeliculas: Pelicula[];
    if (this.movieRepository.existeArchivo()){
        arregloPeliculas=this.movieRepository.leerArchivoPeliculas();
        if (argumentos.titulo!=undefined) {
          arregloPeliculas=this.movieRepository.busquedaxTitulo(arregloPeliculas,argumentos.titulo);
                                  console.warn("----------->Fitrado por titulo OK");   
                                          }
        if (argumentos.year!=undefined) {                           
          arregloPeliculas=this.movieRepository.busquedaxYear(arregloPeliculas,Number(argumentos.year));
                                  console.warn("----------->Fitrado por year OK");
                                        }
        if (argumentos.director!=undefined) {
          arregloPeliculas=this.movieRepository.busquedaxDirector(arregloPeliculas,argumentos.director);
                                  console.warn("----------->Fitrado por director OK");          
                                            }
        if (argumentos.genero!=undefined) {
          arregloPeliculas=this.movieRepository.busquedaxGenero(arregloPeliculas,argumentos.genero);
                                  console.warn("----------->Fitrado por genero OK");          
                                          }
        if (arregloPeliculas.length>0) {
                             return(arregloPeliculas)
                                       } else return ({message:"NO HAY PELICULA/S PARA ESOS FILTROS"});
                                             }else return({message:"Ruta o Archivo INEXISTENTE"});  
   }

}