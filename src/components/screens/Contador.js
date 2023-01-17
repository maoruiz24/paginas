import { useReducer } from "react"


const initState = { contador: 0 }

const init = (initState) => {
    return {
        contador: initState.contador + 10
    }
}

const TYPES = {
    INCREMENTAR: "INCREMENTAR"
}

function reducer(state, action){
    switch (action.type){
        case TYPES.INCREMENTAR:
            return { contador: state.contador + 1}    
    }
}


 const Contador = () => {
    const [state, dispatch] = useReducer(reducer, initState, init)

    return(
        <>
            <h3>{state.contador}</h3>
            <button onClick={() => dispatch({ type: TYPES.INCREMENTAR })}>Incrementar</button>
        </>
    )
}

export default  Contador;