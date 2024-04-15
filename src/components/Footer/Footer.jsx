import sprite from '../../images/sprite.svg';

const Footer = () => {
  return (
      <footer>
          <ul>
              <li>
                  <svg>
                      <use href={`${sprite}#icon-linkedin`}></use>
                  </svg>
          </li>
              <li>
                  <svg>
                      <use href={`${sprite}#icon-twitter`}></use>
                  </svg>
          </li>
              <li>
                   <svg>
                      <use href={`${sprite}#icon-facebook`}></use>
                  </svg>
          </li>
              <li>
                   <svg>
                      <use href={`${sprite}#icon-pinterest`}></use>
                  </svg>
          </li>
          </ul>
    </footer>
  )
}

export default Footer;