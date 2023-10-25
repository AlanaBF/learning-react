//import { useState } from "react";
import { useNavigate, Link,  } from "react-router-dom";
//import { Navigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  //const [goToProduct, setGoToProduct] = useState(() => {
   // return false;
 // });

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      <Link to="/product/details/5">
        <button>Navigate to product detail - 5</button>
      </Link>
      {/* Alternative Method */}
      {/* {goToProduct && <Navigate to="/product/details/3" />}
      <button
        onClick={() => {
          setGoToProduct({goToProduct : true});
        }}
      >Navigate to Product -3(useState)</button> */}
    </div>
  );
}

export default Product;
