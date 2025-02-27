import { useEffect, useReducer, useState } from "react";

let initailState = {likes : 0, dislikes:0};

function reducer(state, action) {
  switch (action.type) {
    case "like":
      return { likes: parseInt(state.likes) + 1, dislikes :state.dislikes };

    case "dislike":
      return { dislikes: parseInt(state.dislikes) + 1, likes: state.likes };
  }
}

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initailState);
  
  const [product, setproduct] = useState({});

  useEffect( ()=> {
    fetch("https://fakestoreapi.com/products/2")
    .then(response => response.json())
    .then(data => {
       setproduct(data);
    })
  },[])


  function handleLikeClick(){
    dispatch({type : "like"});
  }

  function handleDislikeClick(){
    dispatch({type : "dislike"})
  }

  return (
    <div className="container-fluid m-2">
      <h2>Product Details</h2>
      <div className="card p-2" style={{width:"200px"}}>
        <img src={product.image} className="card-img-top" height={150}/>

       <div className="card-header"><p>{product.title}</p></div>
       <div className="card-footer">
       <button className="btn btn-primary" onClick={handleLikeClick}>
        <span className="bi bi-hand-thumbs-up"></span>
        {[state.likes]}
        </button>

       <button className="btn btn-danger" onClick={handleDislikeClick}>
         <span className="bi bi-hand-thumbs-down"></span>
         {[state.dislikes]}
       </button>
       </div>
      </div> 
    </div>
  )
}