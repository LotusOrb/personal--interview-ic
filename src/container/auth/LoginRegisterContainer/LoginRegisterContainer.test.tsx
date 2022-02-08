import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import { LoginRegisterContainer } from "./LoginRegisterContainer";

describe("<LoginRegisterContainer />", () => {
  it("should render Login", async () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useMatch: () => true,
    }));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/auth/login"]}>
          <LoginRegisterContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should render Register", async () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useMatch: () => false,
    }));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/auth/register"]}>
          <LoginRegisterContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});
