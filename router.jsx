import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/MainLayout";
import HomePage from "./src/pages/HomePage";
import ProgrammingNewsPage from "./src/pages/ProgrammingNewsPage";
import SearchPage from "./src/pages/SearchPage";
import SavedNewsPage from "./src/pages/SavedNewsPage";
import CovidPage from "./src/pages/CovidPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "programming-news",
                element: <ProgrammingNewsPage />
            },
            {
                path: "covid-news",
                element: <CovidPage />
            },
            {
                path: "search/:keyword",
                element: <SearchPage />
            },
            {
                path: "saved",
                element: <SavedNewsPage />
            }
        ]
    }
])

export default router