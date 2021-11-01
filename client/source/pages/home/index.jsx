import React from "react";
import ImageDeno from "../../asset/images/deno-logo.svg";
import ImageGithub from "../../asset/images/icons8-github-50.png";
import ImageLinkedin from "../../asset/images/icons8-linkedin-50.png";
import ImageTwitter from "../../asset/images/icons8-twitter-50.png";

function Home() {
  return (
    <React.Fragment>
      <div className="flex-container">
        <header>Ajinkya नरवाडे</header>
        <div className="information">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="font1">
            अंतरिक्ष यान से दूर नीचे पृथ्वी शानदार ढंग से जगमगा रही थी ।
            अंतरिक्ष यान से दूर नीचे पृथ्वी शानदार ढंग से जगमगा रही थी ।
            अंतरिक्ष यान से दूर नीचे पृथ्वी शानदार ढंग से जगमगा रही थी ।{" "}
          </p>
        </div>
        <img src={ImageDeno} alt="NotFound" width="200px" />
        <div className="socialmediabutton">
          <a href="https://github.com/jinkya2" target="_blank">
            <img src={ImageGithub} alt="github" width="40" />
          </a>
          <a href="https://linkedin.com">
            <img src={ImageLinkedin} alt="linkedin" width="40" />
          </a>
          <a href="https://twitter.com/devAkra">
            <img src={ImageTwitter} alt="twitter" width="40" />
          </a>
        </div>

        <hr />
      </div>
    </React.Fragment>
  );
}

export default Home;
