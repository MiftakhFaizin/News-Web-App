import { useDispatch, useSelector } from "react-redux"

const NewsList = () => {
    const newsData = useSelector(state => state.newsData.datas)
    const dispatch = useDispatch()
    const savedNews = useSelector(state => state.savedNews)
    const descSavedNews = savedNews.map(news => news.desc)

    const handleSavedButton = (source, writer, title, desc, webUrl) => {
        const newSavedNews = {
            source: source,
            writer: writer,
            title: title,
            desc: desc,
            webUrl: webUrl
        }
        dispatch({type: "ADD_SAVED_NEWS", payload: newSavedNews})
    }

    const handleUnsavedButton = (desc) => {
        const indexTitle = descSavedNews.indexOf(desc)
        let newSavedNews = [...savedNews]
        newSavedNews.splice(indexTitle, 1)
        dispatch({type: "DELETE_SAVED_NEWS", payload: newSavedNews})
    }

    return (
        <div className="grid grid-cols-4 gap-4 lg:px-[40px] pt-[10px] pb-[50px] max-lg:flex max-lg:flex-col max-lg:gap-[10px]">
            {newsData.map((news, index) => {
                return (
                    <div key={index} className="flex flex-col py-[20px] px-[20px] justify-between">
                        <div>
                            <p className="text-gray-900 pt-[10px]">{news.source}</p>
                            <p className="text-black font-bold text-[20px] h-[90px] max-lg:h-[60px] overflow-hidden text-ellipsis line-clamp-3 max-lg:line-clamp-2">{news.headline.main}</p>
                            <p className="text-gray-900 pt-[10px]">{news.byline.original}</p>
                            <p className="text-gray-600 pt-[10px] h-[155px] max-lg:h-[85px] overflow-hidden text-ellipsis line-clamp-6 max-lg:line-clamp-3">{news.abstract}</p>
                        </div>
                        <div className="flex gap-[10px] pt-[20px] max-lg:pt-[5px]">
                            <a href={news.web_url} target="_blank" className="text-white bg-blue-500 hover:bg-blue-600 px-[8px] py-[5px] rounded-[3px] transition-colors duration-300 ease-in-out">News Page</a>
                            {descSavedNews.includes(news.abstract) ? 
                                <button onClick={ () => {handleUnsavedButton(news.abstract)}} className="text-white bg-red-600 hover:bg-red-700 px-[8px] py-[5px] rounded-[3px] transition-colors duration-300 ease-in-out">UnSaved</button>
                                :
                                <button onClick={ () => {handleSavedButton(news.source, news.byline.original, news.headline.main, news.abstract, news.web_url)}} className="text-white bg-yellow-500 hover:bg-yellow-600 px-[8px] py-[5px] rounded-[3px] transition-colors duration-300 ease-in-out">Save</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsList