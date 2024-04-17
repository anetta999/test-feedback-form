import styled from '@emotion/styled';
import yellowSmile from '../../assets/yellow_smile.png';
import clouds from '../../assets/clouds.png';
import location from '../../assets/location.png';
import yellowSmallSmile from '../../assets/yellow_small.png';
import pinkSmile from '../../assets/pink_smile.png';
import ellipse from '../../assets/ellipse.png';  

export const StyledSection = styled.section`
  padding-top: 179px;
  padding-bottom: 174px;
  background-image: url(${yellowSmile}), url(${clouds}), url(${yellowSmallSmile}), url(${pinkSmile}), url(${location}), url(${ellipse});
  background-repeat: no-repeat;
  background-size: 122px 121px, 1377px 877px, 127px 127px, 298px 298px, 976px 976px cover, 87px 87px;
  background-position: top 22px left 29px, left 0px top 101px, top 516px left 920px, top 558px right 379px, top 0px right 0px, top 21px right 800px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  background-position: top 22px left 29px, left 0px top 101px, top 700px left 330px, top 695px right 100px, top 0px right 0px, top 21px right 800px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  background-position: top 22px left 29px, left 0px top 101px, top 516px left 763px, top 558px right 379px, top 0px right 0px, top 21px right 800px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  width: 1440px;
  padding-left: 147px;
  padding-right: 147px;
  }
  
`;

export const Title = styled.h1`
margin-bottom: 30px;
font-weight: 400;
font-size: 30px;
line-height: 1.3;
color: ${({ theme }) => theme.colors.black};

@media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
font-size: 40px;
  }
`;
