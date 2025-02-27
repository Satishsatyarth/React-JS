import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";


export default function SPAComponent(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <nav>
                <ul>
                    <li> <Link to="/html">HTML</Link> </li>
                    <li> <Link to="/css">CSS</Link> </li>
                    <li> <Link to="/js">JavaScript</Link> </li>
                    <li> <Link to="shoppingCart">ShoppingCart</Link></li>
                </ul>
            </nav>
            <hr/>

            <Routes>
                <Route path="html" element={
                    <main>
                        <h2>HTML Home</h2>
                        <p>It is markup Language.</p>
                    </main>
                }
                />

                <Route path="css" element={
                    <main>
                        <h2>CSS Home</h2>
                        <p>It is style.</p>
                    </main>
                }
                />

                <Route path="js" element={
                    <main>
                        <h2>JavaScript Home</h2>
                        <p>It is programming Language.</p>
                    </main>
                }
                />

                <Route path="shoppingCart" element={
                    <ShoppingCart/>
                }
                />

                <Route path="/" element={
                    <main>
                        <h2>Home</h2>
                        <p>It is home page.</p>
                    </main>
                }
                />

                <Route path="*" element={
                    <main>
                        <code>Not found : Page you requested not found.</code>
                    </main>
                }>

                </Route>

            </Routes>
            </BrowserRouter>
        </div>
    )
}