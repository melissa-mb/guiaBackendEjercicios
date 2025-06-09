export interface TipoFecha{
    fecha : string
}
export const listaFechas : TipoFecha[] = [
    
]

export interface Producto{
    id : number,
    name : string,
    price : number,
    category : string
}

export const listaProductos : Producto[] = [
    {id : 1, name : "prod1", price : 2.5, category : "cat1" }, 
    {id : 2, name : "prod2", price : 3.5, category : "cat1" }, 
    {id : 3, name : "prod3", price : 2.5, category : "cat1" }, 
    {id : 4, name : "prod4", price : 4.5, category : "cat2" }, 
    {id : 5, name : "prod5", price : 2.5, category : "cat2" }, 
    {id : 6, name : "prod6", price : 6.5, category : "cat3" }, 
    {id : 7, name : "prod7", price : 7.5, category : "cat3" }, 
    {id : 8, name : "prod8", price : 1.5, category : "cat3" }, 
]