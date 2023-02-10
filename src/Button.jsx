import store from './store'

export default function  Button() {

    const add  = ()=> store.count++

    return(
        <button onClick={add}>
            sumar
        </button>
    )
}