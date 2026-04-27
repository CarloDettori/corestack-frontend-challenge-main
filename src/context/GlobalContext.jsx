import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [datas, setDatas] = useState([])


    async function fetchData(url) {
        const response = await fetch(url)
        const dati = await response.json()
        return dati
    }

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts")
            .then(obj => setDatas(obj))
            .catch(error => console.error(error))
            .finally(console.log("fetch end"))
    }, [])

    return (
        <GlobalContext.Provider value={{ datas, setDatas }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }