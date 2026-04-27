import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function HomePge() {

const { datas, setdatas } = useContext(GlobalContext)



    return (
        <section>
            HOMEPAGE
        </section>
    )
}