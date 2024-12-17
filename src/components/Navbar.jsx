import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState("")
    const newsData = useSelector(state => state.newsData.datas)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearchBtn = () => {
        if(inputValue !== "") {
            navigate(`search/${inputValue}`)
            dispatch({type: "SEARCH", payload: inputValue})
        } else {
            return null
        }
    }

    useEffect(() => {
        setInputValue("")
    }, [newsData])

    return (
        <div className="flex justify-between items-center px-[40px] py-[10px] ">
            <ul className={`${hamburgerMenu ? "fixed top-0 left-0 w-[80%] h-screen bg-white z-40 flex-col gap-[10px] pt-[50px] max-lg:px-[30px] shadow-lg shadow-r-slate-800" : "max-lg:hidden"} flex gap-[20px] pl-[20px] text-gray-600`}>
                <span onClick={() => {setHamburgerMenu(false)}} className="lg:hidden self-end">&#10060;</span>
                <Link onClick={() => {setHamburgerMenu(false)}} to="" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">Indonesia</Link>
                <Link onClick={() => {setHamburgerMenu(false)}} to="programming-news" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">Programming</Link>
                <Link onClick={() => {setHamburgerMenu(false)}} to="covid-news" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">Covid-19</Link>
                <Link onClick={() => {setHamburgerMenu(false)}} to="saved" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">Saved</Link>
            </ul>
            <div className="pl-[20px]">
                <button onClick={() => {setHamburgerMenu(!hamburgerMenu)}} data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div >
                <input 
                onChange={handleInput} 
                value={inputValue}
                placeholder="Input Keyword"
                className="border border-gray-600 border-r-blue-500 outline-none rounded-l-[4px] px-[9px] py-[2px]">
                </input>
                <button 
                onClick={handleSearchBtn} 
                className="text-white bg-blue-500 hover:bg-blue-600 px-[5px] py-[3px] rounded-r-[4px] transition-colors duration-300 ease-in-out">
                Search
                </button>
            </div>
        </div>
    )
}

export default Navbar