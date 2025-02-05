import { useState } from "react"


export default function TwoWayBinding(){

    const[product, setproduct] = useState({Name:"", Price:0, City:"", Stock:false});

    const[newProduct, setnewProduct] = useState({Name:"", Price:0, City:"", Stock:false});

    function handleName(e){
        setproduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock    
        })
    }

    function handlePrice(e){
        setproduct({
            Name:product.Name,
            Price:e.target.value,
            City:product.City,
            Stock:product.Stock
        })
    }

    function handleCity(e){
        setproduct({
            Name:product.Name,
            Price:product.City,
            City:e.target.value,
            Stock:product.Stock
        })
    }

    function handlStock(e){
        setproduct({
            Name:product.Name,
            Price:product.City,
            City:product.City,
            Stock:e.target.checked
        })
    }

    function handleRegisterClick(){
        setnewProduct(product);
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input className="form-control" onChange={handleName} type="text"/></dd>
                        <dt>Price</dt>
                        <dd><input className="form-control" onChange={handlePrice} type="text"/></dd>
                        <dt>City</dt>
                        <dd >
                            <select className="form-select" onChange={handleCity}>
                                <option>Delhi</option>
                                <option>Hyd</option>
                                <option>Mumbai</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" onChange={handlStock} type="checkbox"/>Available</dd>
                    </dl>
                    
                    <button className="btn btn-primary w-100" onClick={handleRegisterClick}>Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock==true)? "Availabe" : "Out of stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}