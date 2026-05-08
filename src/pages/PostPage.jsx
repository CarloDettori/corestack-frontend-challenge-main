import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../context/GlobalContext"
import PostCardCom from "../components/ui/PostCardCom"
import Modal from "../components/ui/Modal"


export default function PostPage() {

    const { datas } = useContext(GlobalContext)

    const [open, setOpen] = useState(false);

    const [posts, setPosts] = useState(datas);

    const [virginPost, setVirginPost] = useState(true)

    const newPost = useRef({
        userId: null,
        id: null,
        title: null,
        body: null
    })

    console.log(datas)

    return (
        <section>
            <h1 className="text-center mt-10 font-bold">TUTTI I POST</h1>
            <button className="mx-auto border px-3 py-1 rounded-xl cursor-pointer hover:text-white hover:bg-black" onClick={() => setOpen(true)}>
                Aggiungi un post
            </button>
            <div className="p-10 flex flex-wrap justify-center gap-5">

                {posts ?
                    posts?.map((post) => {
                        return (
                            <PostCardCom key={post.id} customClass={"w-100"}>
                                <h1 className="font-bold">{post.title}</h1>
                                <h2>{post.body}</h2>
                                <h3>Made by user n^{post.userId}</h3>
                            </PostCardCom>
                        )
                    }) : <p>Loading...</p>
                }
                <button className="border px-3 py-1 rounded-xl cursor-pointer hover:text-white hover:bg-black" onClick={() => setOpen(true)}>
                    Aggiungi un post
                </button>
            </div>

            <Modal isOpen={open} onClose={() => setOpen(false)}>

                <form ref={newPost} class="flex flex-col gap-5 max-w-sm mx-auto">

                    <div>
                        <label for="visitors" class={`block mb-2.5 text-sm font-medium text-heading ${virginPost ? 'text-heading' : !newPost.title ? 'text-fg-danger-strong' : 'text-fg-success-strong'}`}>Post title</label>
                        <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Isaac" required />
                        {virginPost ? '' : !newPost.body ? <p class="mt-2.5 text-sm text-fg-danger-strong"><span class="font-medium">Empty title</span> Please, insert a post title.</p> : <p class="mt-2.5 text-sm text-fg-success-strong"><span class="font-medium">Well done!</span>Title accepted.</p>}
                    </div>

                    <div>
                        <label for="message" class={`block mb-2.5 text-sm font-medium  ${virginPost ? 'text-heading' : !newPost.body ? 'text-fg-danger-strong' : 'text-fg-success-strong'}`}>I like cakes</label>
                        <textarea id="message" rows="4" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>
                        {virginPost ? '' : !newPost.body ? <p class="mt-2.5 text-sm text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Please, insert a post description.</p> : <p class="mt-2.5 text-sm text-fg-success-strong"><span class="font-medium">Well done!</span> Description accepted.</p>}
                    </div>

                    <div>
                        <label for="number-input" class={`block mb-2.5 text-sm font-medium ${virginPost ? 'text-heading' : !newPost.userId ? 'text-fg-danger-strong' : 'text-fg-success-strong'}`}>Insert your id number</label>
                        <input type="number" id="number-input" aria-describedby="helper-text-explanation" class={`block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body ${virginPost ? '' : !newPost.body ? 'text-fg-danger-strong' : 'text-fg-success-strong'}`} placeholder="32" required />
                        {virginPost ? '' : !newPost.body ? <p class="mt-2.5 text-sm text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span>Please, your id number.</p> : <p class="mt-2.5 text-sm text-fg-success-strong"><span class="font-medium">Well done!</span>Id accepted.</p>}
                    </div>
                </form>

            </Modal>
        </section>
    )
}