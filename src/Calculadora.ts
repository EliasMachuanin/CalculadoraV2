import Contexto from "./Contexto";
import { ExpresionOperacion } from "./ExpresionOperacion";
import { ExpresionNumerica } from "./ExpresionNumerica";


export class Calculadora {
    public resultado = null
    public operando = null
    public operacion = null

    constructor(){
    }

    public procesarNuevoElemento(a : Contexto){
        if(a.tipo instanceof ExpresionOperacion){
            if((this.resultado != null)){
                this.operacion = a.valor
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = null
                console.log("Syntax Error") 
            }
        }
        else if(a.tipo instanceof ExpresionNumerica){
            if(this.resultado == null){
                this.resultado = a.valor
            }
            else if(this.operacion != null){
                this.operando = a.valor
                this.realizarOperacion()
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = null
                console.log("Syntax Error") 
                
            }
        }
        else{
            this.resultado = null
            this.operando=null
            this.operacion = null
            console.log("Syntax Error")             
        }
    }

    public realizarOperacion(){
        this.resultado = this.operacion.implementar(this.resultado, this.operando)
        this.operacion = null
        this.operando = null
    }

}
export default Calculadora;