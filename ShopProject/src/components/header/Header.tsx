import { Link } from "react-router-dom";
import ShoppingCartIconHeader from "../shoppingCartIconHeader/shoppingCartIconHeader";

export default function Header() {
  return (
    <>
      <nav className="bg-gray-800 sticky z-10 p-2 mt-0  w-full top-0">
        <div className="container  mx-auto flex flex-wrap items-center">
          <div className="flex  w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link
              to="/"
              className="text-white no-underline hover:text-white hover:no-underline"
            >
              <span className="text-2xl pl-2">
                <i className="em em-grinning"></i> Hawkers
              </span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-none flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-3">
                <Link
                  to="/"
                  className="inline-block py-2 px-4 text-white no-underline"
                >
                  Home
                </Link>
              </li>
              <li className="mr-3">
                {<ShoppingCartIconHeader></ShoppingCartIconHeader>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
