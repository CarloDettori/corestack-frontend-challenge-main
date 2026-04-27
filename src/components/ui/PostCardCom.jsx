export default function PostCardCom({ children, customClass }) {



    return (
        <div className={`h-full shadow-2xl border flex flex-col gap-10 mx-auto p-10 sm:p-20 rounded-4xl bg-white text-center my-20 ${customClass}`}>
            {children}
        </div>
    )
}