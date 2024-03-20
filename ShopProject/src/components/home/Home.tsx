import Products from "../products/Products";
/* import type { AllProductData } from "../../types";
import { useLoaderData } from "react-router-dom"; */

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/productSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { allProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="m-0 bg-gray-100 ">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="  w-auto min-w-full min-h-full "
      >
        <source
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw7f2c894f/images/homepage/SPRING-READY-24/IN_HOME_DESK_1920X600.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        {allProducts ? (
          <Products products={allProducts} />
        ) : (
          <li>Loading...</li>
        )}
      </div>
    </main>
  );
}
