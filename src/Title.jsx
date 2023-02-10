import {useSnapshot} from "valtio";
import store from "./store.js";

export default function Title(){
    const {count} = useSnapshot(store)

    return <h1>La cuenta es: {count}</h1>
}