import { useSelector } from "react-redux";

import { StoreType } from "./store";

export const App = () => {
  const { user } = useSelector((state: StoreType) => state);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>
        Vite + React + {user.name} {user.lastName}
      </h1>

      <video
        className="slider-video video-show"
        width="1800"
        height="700"
        preload="auto"
        loop={true}
        autoPlay={true}
        muted={true}
        playsInline={true}
        style={{ width: 902, height: 509, visibility: "visible" }}
      >
        <source
          type="video/mp4"
          src="https://www.brq.com/wp-content/uploads/2023/09/Fusion-V2.mp4"
        />
      </video>
    </>
  );
};
