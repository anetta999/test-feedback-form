import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
      <footer>
          <ul>
              <li>
                <TiSocialLinkedin />
          </li>
              <li>
                  <TiSocialTwitter />
          </li>
              <li>
                   <TiSocialFacebook />
          </li>
              <li>
                   <TiSocialPinterest />
          </li>
          </ul>
    </footer>
  )
}

export default Footer;