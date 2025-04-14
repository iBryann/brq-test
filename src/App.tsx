import { useSelector } from "react-redux";

import { StoreType } from "./store";

export const App = () => {
  const { user } = useSelector((state: StoreType) => state);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>
        Vite + React + {user.name} {user.lastName} {user.country}
      </h1>
    </>
  );
};
