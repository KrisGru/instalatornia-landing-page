import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";

const SocialMedia = () => {
  return (
    <ul className="socialMedia-list">
      <li>
        <FacebookIcon
          className="socialMedia-item facebook"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100085298913640",
              "_blank"
            )
          }
        />
      </li>
      <li>
        <InstagramIcon
          className="socialMedia-item instagram"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        />
      </li>
      <li>
        <YoutubeIcon
          className="socialMedia-item youtube"
          onClick={() => window.open("https://www.youtube.com/", "_blank")}
        />
      </li>
    </ul>
  );
};

export default SocialMedia;
