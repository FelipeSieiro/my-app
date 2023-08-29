import { useState } from "react"
import{Button} from"../Button/Button"


interface ConterProps{
    step?:number
    start?: number
}

export const Counter = ({step = 1, start =0}) => {
    const [count, setCount]= useState(start)
    const [ isDisable, setIsDisable] = useState(true)

    const handleIncrement =()=> {
        console.log("Incrementar")
        setCount(count+1)
        if(count>= 0){
            setIsDisable(false)
        }
        setCount(count+step)
    }
    const handleDecrementar =()=> {
        console.log("Decrementar")
        setCount(count-1)
        if(count <=0){
            setIsDisable(true)
        }
        setCount(count-step)
    }

    return(
        <div>
            <Button danger onClick = {handleDecrementar} disabled={isDisable}>Decrementar</Button>
            <span><strong>{count}</strong></span>
            <Button sucess onClick ={handleIncrement}>Incrementar</Button>
        </div>
    )
}