import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import NewsList from "../components/NewsList"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import ErrorAPI from "../components/ErrorAPI"

const SearchPage = () => {
    const { keyword } = useParams()
    const apiKey = import.meta.env.VITE_API_KEY
    const [tryAgainBtn, setTryAgainBtn] = useState(true)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleTryAgainBtn = () => {
        setTryAgainBtn(!tryAgainBtn)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${apiKey}`)
                const data = await res.json()
                dispatch({type: "ADD_NEWS_DATA", payload: data.response.docs})
                setError(false)
            } catch(err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [keyword, tryAgainBtn])

    return (
        <div>
            <div className="py-[50px] border-b border-slate-500">
                <p className="text-[20px] font-bold text-center">{keyword.toUpperCase()} NEWS</p>
            </div>
            {loading ? <Loading /> : error ? <ErrorAPI handleTryAgainBtn={handleTryAgainBtn} /> : <NewsList />}
        </div>
    )
}

export default SearchPage