import styled from '@emotion/styled';
import pinkSmile from '../../assets/red_cartoon_six.png';
import greenSmile from '../../assets/green_smile.png';
import yellowSmile from '../../assets/red_cartoon_four.png';

export const StyledFooter = styled.footer`
  padding-top: 79px;
  padding-bottom: 104px;
  border-top: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-image: url(${pinkSmile}), url(${greenSmile}), url(${yellowSmile});
  background-repeat: no-repeat;
  background-size: 298px 238px, 79px 97px, 84px 122px;
  background-position: top 0px left 14px, top 0px right 127px, top 51px right 0px;
`;

export const IconsList = styled.ul`
 margin-left: 193px;
 display: inline-flex;
 align-items: center; 
 gap: 25px;

 li{
    a{
      display: inline-block;
      width: 20px;
      height: 20px;

      svg{
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.colors.darkGrey};
        transition: fill ${({theme}) => theme.transition.main};
      }

      :is(:hover, :focus) svg {
      fill: ${({theme}) => theme.colors.accent};
      }
    }
 }
`;