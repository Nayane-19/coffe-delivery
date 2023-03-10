import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaulTLayout";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    );
}