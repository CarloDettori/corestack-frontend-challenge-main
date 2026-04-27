import { Link } from "react-router-dom"

export default function HomePge() {


    return (
        <section className="flex flex-col gap-5 text-center p-20">
            <div>
                <h1 className="font-bold">BENVENUTO NELL'APP POSTER</h1>
                <h2>In quest'app puoi visualizzare vari post. </h2>
                <h2>Clicca il bottone qui sotto per vederei post</h2>
            </div>
            <Link to="/posts" className="border rounded-4xl px-5 py-3 w-40 mx-auto hover:bg-black hover:text-white">Vedi i posts</Link>
        </section>
    )
}