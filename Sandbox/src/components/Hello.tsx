import { useContext } from "react"
import { ItemsContext } from "../store/items-store"

export default function Hello() {
    const itemsCtx = useContext(ItemsContext)


    return (
        <div>
            <h1>Hello World</h1>
            {itemsCtx.items.map((item, index) => <li key={index}>{item}</li>)}
        </div>
    )
}