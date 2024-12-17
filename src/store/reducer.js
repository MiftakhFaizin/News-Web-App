const newsDataInitialState = {
    datas: [],
}
export const newsDataReducer = (initialState = newsDataInitialState, action) => {
    switch(action.type) {
        case "ADD_NEWS_DATA":
            return {
                ...initialState,
                datas: action.payload
            }
        default:
            return initialState
    }
}

export const savedNewsReducer = (initialState = [], action) => {
    switch(action.type) {
        case "ADD_SAVED_NEWS":
            return [...initialState, action.payload]
        case "DELETE_SAVED_NEWS":
            return [...action.payload]
        default:
            return initialState
    }
}