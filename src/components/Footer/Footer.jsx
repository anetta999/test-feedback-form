import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { Container } from "../Section/Section.styled";
import { StyledFooter, IconsList } from "./Footer.styled";

const Footer = () => {
  return (
      <StyledFooter>
          <Container>
            <IconsList>
                <li>
                  <a href='https://www.linkedin.com/feed/' target="blank"><TiSocialLinkedin /></a>
            </li>
                <li>
                    <a href='https://twitter.com/X' target="blank"><TiSocialTwitter /></a>
            </li>
                <li>
                     <a href='https://uk-ua.facebook.com/' target="blank"><TiSocialFacebook /></a>
            </li>
                <li>
                     <a href='https://www.pinterest.com/' target="blank"><TiSocialPinterest /></a>
            </li>
            </IconsList>
          </Container>
    </StyledFooter>
  )
}

export default Footer;