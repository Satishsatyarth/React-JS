import React from "react";
import Cardcomponent from "./Cardcomponent";

export default class ShoppingCartClassDemo extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            categories : [],
            products : []
        }
        this.HandleCategoryChange = this.HandleCategoryChange.bind(this);
    }

    GetCategories() {
        fetch("https://fakestoreapi.com/products/categories")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ categories: data });
          })
          .catch((error) => console.error("Error fetching categories:", error));
      }
      
      GetProducts(url) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ products: data });
          })
          .catch((error) => console.error("Error fetching products:", error));
      }
      

    componentDidMount(){
        this.GetCategories();
        this.GetProducts("https://fakestoreapi.com/products");
    }

    HandleCategoryChange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }


  render() {
    return (
      <div className="container-fluid">
        <header className="bg-danger p-2 text-white text-center">
          <h1>
            <span className="bi bi-cart"></span>Shopping Home
          </h1>
        </header>
        <section className="row">
          <nav className="col-3">
            <h2>Select categories</h2>
            <select className="form-select" onChange={this.HandleCategoryChange}>
              {
                this.state.categories.map(category => 
                    <option key={category} value={category}>
                        {category}
                    </option>
                )
              }
            </select>
          </nav>
          <main className="col-9">
            <div className="d-flex flex-wrap">
                {
                    this.state.products.map(product => 
                    <Cardcomponent key={product.id} product={product}/>
                    )
                }
            </div>
          </main>
        </section>
      </div>
    )
  }
}


/*
<div key={product.id} className="card m-2 p-2" style={{width:"200px"}}>
                        <img src={product.image} className="card-img-top" height = "150"/>
                        <div className="card-header" style={{height:"150px"}}>
                            <p>{product.title}</p>
                        </div>

                    </div>
*/