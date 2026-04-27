import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


export default function PostPage() {

    const { datas, setdatas } = useContext(GlobalContext)

    console.log(datas)

    return (
        <section>
            POSTPAGE
        </section>
    )
}