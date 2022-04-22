import { Link } from "react-router-dom";
import { useAuth, useProduct } from "../../context";
import "./Navbar.css";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { HamburgerNav } from "./HamburgerNav";

const Navbar = () => {
  const {
    auth: { status, username },
    setAuth,
  } = useAuth();
  const signOutHandler = setAuth => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(auth => ({
      ...auth,
      status: false,
      token: null,
      username: "",
    }));
  };
  const [{ cart, wishlist }] = useProduct();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header className="navbar-wrapper d-flex align-center justify-around box-shadow-lg">
        <Link
          className="brand-name text-dec-none headline-lg font-wt-bold p-4 d-flex align-center"
          to="/"
        >
          <span>Bicycle Store</span>
        </Link>
        <button
          id="hamburger-btn"
          className="btn text-md ml-auto mr-8 p-4"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <i className="fas fa-bars hamburger-icon"></i>
        </button>
        <section id="nav-menu-without-hamburger" className="d-flex m-2">
          <nav className="nav-links d-flex align-center">
            <NavItem
              navItemTitle={"Products"}
              icon={"store"}
              navigateTo={"/products"}
            />
            <NavItem
              itemCount={cart.length}
              navItemTitle={"Cart"}
              icon={"shopping-cart"}
              navigateTo={"/cart"}
            />
            <NavItem
              itemCount={wishlist.length}
              navItemTitle={"Wishlist"}
              icon={"heart"}
              navigateTo={"/wishlist"}
            />
            <div className="ml-4">
              {status === true ? (
                <button
                  className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                  onClick={() => signOutHandler(setAuth)}
                >
                  Signout
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                >
                  Signin
                </Link>
              )}
            </div>
            {username && (
              <h3 className="headline-sm">{`Welcome ${username}`}</h3>
            )}
          </nav>
        </section>
      </header>
      {isMobileNavOpen && (
        <HamburgerNav
          status={status}
          wishlist={wishlist}
          cart={cart}
          signOutHandler={signOutHandler}
          setAuth={setAuth}
          username={username}
        />
      )}
    </>
  );
};

export { Navbar };
