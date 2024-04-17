// const SomeName = styled.div`
//   color: ${({theme}) => theme.colors.blue};

// @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
//   color: ${({theme}) => theme.color.black};
// }
// @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
//   color: ${({theme}) => theme.color.black};
// }
//  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
//   color: ${({theme}) => theme.color.black};
//  }

export const theme = {
  colors: {
    accent: "#f0833a",
    black: "#3e3e3e",
    lightBlack: "#2d2d2d",
    white: "#FFF",
    yellow: "#FAD34F",
    grey: "#D8D8D8",
    lightGrey: '#fafafa',
    semiDarkGrey: '#dcdcdc',
    darkGrey: '#696969',
  },
  transition: {
    main: "250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",
  },
  breakpoint: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1440px',
    },
};