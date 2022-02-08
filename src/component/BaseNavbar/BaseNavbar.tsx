import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreDispatch } from "../../common/hook/useStoreDispatch";
import { actionAuthUnauthenticateUser } from "../../store/authSlice";

export default function BaseNavbar() {
  const dispatch = useStoreDispatch();
  const [state, setState] = useState({ isNavbarOpen: false });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/app"}>
          Application
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setState({ isNavbarOpen: !state.isNavbarOpen })}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"navbar-collapse collapse " + (state.isNavbarOpen && "show")}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                onClick={() => setState({ isNavbarOpen: false })}
                className={(ev) => "nav-link " + (ev.isActive && "active")}
                to={{ pathname: "/app/blog" }}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => setState({ isNavbarOpen: false })}
                className={(ev) => "nav-link " + (ev.isActive && "active")}
                to={{ pathname: "/app/filter-test" }}
              >
                Filter Test
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-danger"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(actionAuthUnauthenticateUser());
                }}
                href="#"
              >
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
