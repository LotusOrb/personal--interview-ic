import React, { useEffect } from "react";
import { useStoreDispatch } from "./common/hook/useStoreDispatch";
import BaseApiService from "./common/service/baseApiService";
import { RouteList } from "./routes/RouteList";
import { actionAuthAuthenthicateUser, actionAuthUnauthenticateUser } from "./store/authSlice";

const service = new BaseApiService();

function App() {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    let authCheck = service.getAuthStorage();

    if (authCheck) {
      dispatch(actionAuthAuthenthicateUser({ auth_token: authCheck }));
    }
    window.addEventListener("APP_AUTH_UNAUTHORIZED", () => {
      dispatch(actionAuthUnauthenticateUser());
    });
  }, []);

  return <RouteList />;
}

export default App;
