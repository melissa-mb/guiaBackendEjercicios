import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { listaFechas, listaProductos, Producto } from "./data"

dotenv.config()

const app = express()

const PORT = process.env.PORT

/* EJERCICIO 2 ---------------------------------------------*/
app.get("/products", (req: Request, resp: Response)=>{
    resp.json({
        listaProductos
    })

})

app.get("/products/:id", (req: Request, resp: Response)=>{
    const id = req.params.id
    /*
    let prodEncontrado : Producto | null = null
    for (let prod of listaProductos) {
        if (prod.id.toString() == id) {
            prodEncontrado = prod
            break;
        }
    }

    if (prodEncontrado == null) {
        // Error: no se encontro
        resp.status(400).json({
            msg : "Codigo incorrecto"
        })
    }

    resp.json(prodEncontrado)
    */

    const indiceAMostrar= listaProductos.findIndex((P: Producto)=>{
        return P.id.toString() == id // almacena la primera posicion q dice true o -1 si no lo encuentra
    })
    if (indiceAMostrar != -1){
        resp.json(listaProductos[indiceAMostrar])
        return
    }
    resp.status(400).json({
        msg : "codigo no encontrado"
    })
    

})

/* EJERCICIO 3 ----------------------------------------------*/
let numVisitas = 0
app.get("/visit", (req: Request, resp: Response)=>{
    numVisitas += 1
    listaFechas.push({
        fecha: new Date().toISOString()
    })
    resp.json({
        msg : "gracias por su visita! visitas totales: " + numVisitas
    })

})

app.get("/visits", (req: Request, resp: Response)=>{
    resp.json(listaFechas)
})

/* EJERCICIO 4 ----------------------------------------------*/
const validarNumeros = (a : string | undefined, b : string | undefined) =>{
    if (a == undefined || b == undefined){
        return false;
    } if ( (!Number.isNaN(Number(a))) && !Number.isNaN(Number(b))){
        return true;
    }
    return false;
}

app.get("/add/:a/:b", (req: Request, resp: Response)=>{
    const a = req.params.a
    const b = req.params.b
    if (validarNumeros(a,b)){
        const num = Number(a) + Number(b)
        resp.json({
            msg : "la suma es "+num
        })
    } else {
        resp.status(400).json({
            msg : "error al ingresar"
        })
    }
})

app.get("/subtract/:a/:b", (req: Request, resp: Response)=>{
    const a = req.params.a
    const b = req.params.b
    if (validarNumeros(a,b)){
        const num = Number(a) - Number(b)
        resp.json({
            msg : "la resta es "+num
        })
    } else {
        resp.status(400).json({
            msg : "error al ingresar"
        })
    }
})

app.get("/multiply/:a/:b", (req: Request, resp: Response)=>{
    const a = req.params.a
    const b = req.params.b
    if (validarNumeros(a,b)){
        const num = Number(a) * Number(b)
        resp.json({
            msg : "la multiplicacion es "+num
        })
    } else {
        resp.status(400).json({
            msg : "error al ingresar"
        })
    }
})

app.get("/divide/:a/:b", (req: Request, resp: Response)=>{
    const a = req.params.a
    const b = req.params.b
    if (validarNumeros(a,b)){
        if (Number(b)==0){
            resp.status(400).json({
                msg : "no se puede dividir entre 0"
            })
            return
        }
        const num = Number(a) / Number(b)
        resp.json({
            msg : "la division es "+num
        })
    } else {
        resp.status(400).json({
            msg : "error al ingresar"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Se inicio servidor en puerto ${PORT}`)
})