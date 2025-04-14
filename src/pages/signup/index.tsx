import { useSelector, useDispatch } from "react-redux";

import BRQIcon from "src/assets/logo-signup.svg";
import { SignupContainer } from "./styles";
import { toggle } from "src/store/reducers/theme";
import { StoreType } from "src/store";
import { useEffect, useRef } from "react";

export const Signup = () => {
  const { theme } = useSelector((state: StoreType) => state.theme);
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <SignupContainer>
      <div className="brand">
        <video
          ref={videoRef}
          className="brand-video-bg"
          preload="auto"
          loop={true}
          autoPlay={true}
          muted={true}
          playsInline={true}
        >
          <source
            type="video/mp4"
            src="https://www.brq.com/wp-content/uploads/2023/09/Fusion-V2.mp4"
          />
        </video>

        <div className="brand-content">
          <img src={BRQIcon} alt="BRQ" />

          <h2>BRQ Exchange</h2>

          <button onClick={() => dispatch(toggle())} type="button">
            Toggle - {theme}
          </button>
        </div>
      </div>

      <form name="signup" className="signup">
        312312321
      </form>
    </SignupContainer>
  );
};
