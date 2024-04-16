import FeedbackForm from "./components/FeedbackForm/FeedbackForm"
import Footer from "./components/Footer/Footer"
import { Section } from "./components/Section/Section";
import { Title } from "./components/Section/Section.styled";


function App() {

  return (
    <>
     <main>
          <Section>
            <Title>Reach out to us!</Title>
            <FeedbackForm />
          </Section>
     </main>
      <Footer/>
    </>
  )
}

export default App;
