const ErrorAPI = (props) => {
    return (
        <div className="flex flex-col gap-[20px] w-full h-[300px] justify-center items-center">
            <p className="text-slate-500 text-[17px]">Failed to Load News</p>
            <button 
            onClick={() => {props.handleTryAgainBtn()}}
            className="px-[10px] py-[5px] rounded-md text-white bg-black hover:bg-gray-800">
            Try Again
            </button>
        </div>
    )
}

export default ErrorAPI