import { Container, StyledSection} from './Section.styled';

export const Section = ({children}) => {
  return (
      <StyledSection><Container>{children}</Container></StyledSection>
  )
}
