import useFetchData from "../Hooks/useFetchData";

export default function CustomHooksDemo(){

    const [products] = useFetchData("https://fakestoreapi.com/products");
    return(
        <div className="container-fluid">
            <h2>Products Details</h2>
            <ol>
                {
                    products.map((product) =>
                        <li>{product.title}</li>
                    )
                }
            </ol>
        </div>
    )
}