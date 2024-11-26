import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import IncomeStatement from "../IncomeStatement/IncomeStatement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            {
                path: "company/:ticker", element: <CompanyPage />,
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> }
                ]
            },
        ]
    }
])