import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import PostCardCom from "../components/ui/PostCardCom"


export default function PostPage() {

    const { datas } = useContext(GlobalContext)


    console.log(datas)

    return (
        <section>
            <h1 className="text-center mt-10 font-bold">TUTTI I POST</h1>
            <div className="p-10 flex flex-wrap justify-center gap-5">

                {
                    datas?.map((post) => {
                        return (
                            <PostCardCom key={post.id} customClass={"w-100"}>
                                <h1 className="font-bold">{post.title}</h1>
                                <h2>{post.body}</h2>
                                <h3>Made by user n^{post.userId}</h3>
                            </PostCardCom>
                        )
                    })
                }

            </div>
        </section>
    )
}