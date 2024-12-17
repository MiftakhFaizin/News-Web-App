import { useDispatch, useSelector } from "react-redux"

const savedNewsPage = () => {
    const dispatch = useDispatch()
    const savedNews = useSelector(state => state.savedNews)
    const descSavedNews = savedNews.map(news => news.desc)

    const handleUnsavedButton = (desc) => {
        const indexTitle = descSavedNews.indexOf(desc)
        let newSavedNews = [...savedNews]
        newSavedNews.splice(indexTitle, 1)
        dispatch({type: "DELETE_SAVED_NEWS", payload: newSavedNews})
    }

    return (
        <div>
            <div className=" py-[50px] border-b border-slate-500">
                <p className="text-[20px] font-bold text-center">SAVED NEWS</p>
            </div>
            {savedNews.length === 0 ?
            <div className="flex justify-center pt-[150px]">
                 <p className="text-slate-500 text-[17px]">No Saved News</p>
            </div>
            :
            <div className="grid grid-cols-4 gap-4 lg:px-[40px] pt-[10px] pb-[50px] max-lg:flex max-lg:flex-col max-lg:gap-[10px]">
                {savedNews.map((news, index) => {
                    return (
                        <div key={index} className="flex flex-col py-[20px] px-[20px] justify-between">
                            <div>
                                <p className="text-gray-900 pt-[10px]">{news.source}</p>
                                <p className="text-black font-bold text-[20px] h-[90px] max-lg:h-[60px] overflow-hidden text-ellipsis line-clamp-3 max-lg:line-clamp-2">{news.title}</p>
                                <p className="text-gray-900 pt-[10px]">{news.writer}</p>
                                <p className="text-gray-600 pt-[10px] h-[155px] max-lg:h-[85px] overflow-hidden text-ellipsis line-clamp-6 max-lg:line-clamp-3">{news.desc}</p>
                            </div>
                            <div className="flex gap-[10px] pt-[20px] max-lg:pt-[5px]">
                                <a href={news.webUrl} target="_blank" className="text-white bg-blue-500 hover:bg-blue-600 px-[8px] py-[5px] rounded-[3px] transition-colors duration-300 ease-in-out">News Page</a>
                                <button onClick={ () => {handleUnsavedButton(news.desc)}} className="text-white bg-red-600 hover:bg-red-700 px-[8px] py-[5px] rounded-[3px] transition-colors duration-300 ease-in-out">UnSaved</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default savedNewsPage