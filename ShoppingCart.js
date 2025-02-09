import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [categories, setcategories] = useState([]);
  const [products, setproduct] = useState([]);
  const[cartsItem, setcartItem] = useState([]);
  const[itemsCount, setitemsCount] = useState(0);

  function GetCartItemsCount(){
    setcartItem(cartsItem.length)
  }

  function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        setcategories(data);
      });
  }


  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setproduct(data);
      });
  }


  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
  }, [cartsItem.length]); 


  function handleCategoryChange(e) {
    if (e.target.value === "all") {
      LoadProducts("https://fakestoreapi.com/products");
    } else {
      LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
  }

  function handleAddtocart(e){
    alert("Item added to cart") 
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
    .then(response => response.json())
    .then(data => {
      setcartItem((prevCart) => [...prevCart, data]); // Use spread operator to create a new array
        setitemsCount((prevCount) => prevCount + 1);
    })
  }

  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2">
        <h1>
          <span className="bi bi-cart"></span>Shopping Home
        </h1>
      </header>
      <section className="row mt-3">
        <nav className="col-2">
          <div>
            <label>Select a Category</label>
            <div>
              <select className="form-select" onChange={handleCategoryChange}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>

        <main
          className="col-6 d-flex flex-wrap overflow-auto"
          style={{ height: "500px" }}>
          {products.map((product) => (
            <div key={product.id} className="card m-2 p-2" style={{width:"200px"}}>
              <img src={product.image} className="card-img-top" height="150" />
              <div className="card-header" style={{ height: "160px" }}>
                <p>{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>price</dt>
                  <dd>{product.price}</dd>

                  <dt>Rating</dt>
                  <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {product.rating.rate} 
                    <span>[{product.rating.count}]</span>
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button id={product.id} onClick={handleAddtocart} className="btn btn-danger w-100">
                  <span className="bi bi-cart4"></span>Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
        <aside className="col-4">
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span> [{itemsCount}] Your cart items
          </button>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
                <th>Remove All</th>
              </tr>
            </thead>
            <tbody>
              {
                cartsItem.map( item => 
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} width="50" height="50"/>
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        <span className="bi bi-trash "></span>
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </aside>
      </section>
    </div>
  );
}
