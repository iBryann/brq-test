import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { StoreType } from "src/store";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: StoreType) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/configuration");
    } else {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
};
