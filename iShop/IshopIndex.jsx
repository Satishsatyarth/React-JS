
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IShopHome from "./IshopHome";
import IshopLoging from "./IshopLoging";
import IshopRegister from "./IshopRegister";
import IshopDashboard from "./IshopDashboard";
import IshopProducts from "./IshopProducts";
import IshopProductDetails from "./IshopProductDetails";


export default function IshopIndex(){
    return(
       <div className="container-fluid">
        <header className="bg-danger text-white text-center p-2 mt-2">
            <h1>IShop-Online Store</h1>
        </header>
        <section className="mt-2 row">
            <BrowserRouter>
            <nav className="col-3">
                <div className="mb-2">
                    <Link className="btn btn-danger w-100" to="/home">HOME</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-danger w-100" to="/loging">Loging</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-danger w-100" to="/register">Register</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-danger w-100" to="/dashboard">Dashboard</Link>
                </div>
            </nav>
            <main className="col-9">
                <Routes>
                    <Route>
                        <Route path="/" element={<IShopHome/>}/>
                        <Route path="home" element={<IShopHome/>}/>
                        <Route path="loging" element={<IshopLoging/>}/>
                        <Route path="register" element={<IshopRegister/>}/>
                        <Route path="dashboard" element={<IshopDashboard/>}/>
                        <Route path="/products/:category" element={<IshopProducts/>} />
                        <Route path="/details/:id" element={<IshopProductDetails/>}/>
                        <Route path="errorpage" element={
                            <div>
                                <h2 className="text-danger">Invalid Caredentail</h2>
                                <Link to="/loging">Try Again</Link>
                            </div>
                        } />
                    </Route>
                </Routes>
            </main>
            </BrowserRouter>
        </section>
       </div> 
    )
}