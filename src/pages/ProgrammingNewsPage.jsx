import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import NewsList from "../components/NewsList"
import Loading from "../components/Loading"
import ErrorAPI from "../components/ErrorAPI"

const HomePage = () => {
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
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=programming&fq=news_desk:("technology")&api-key=${apiKey}`)
                const data = await res.json()
                dispatch({type: "ADD_NEWS_DATA", payload: data.response.docs})
                setError(false)
            } catch(err) {
                setError(true)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [tryAgainBtn])

    return (
        <div>
            <div className="py-[50px] border-b border-slate-500">
                <p className="text-[20px] font-bold text-center">PROGRAMMING NEWS</p>
            </div>
            {loading ? <Loading /> : error ? <ErrorAPI handleTryAgainBtn={handleTryAgainBtn} /> : <NewsList />}
        </div>
    )
}

export default HomePage