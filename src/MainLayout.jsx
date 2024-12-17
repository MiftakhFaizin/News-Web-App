import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const MainLayout = () => {
    return (
        <div className="flex justify-center">
            <div className="container min-h-screen">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout