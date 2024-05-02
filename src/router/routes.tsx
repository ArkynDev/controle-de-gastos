import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { SpendingPage } from "../pages/SpendingPage";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <SpendingPage /> },
        ],
    }
])