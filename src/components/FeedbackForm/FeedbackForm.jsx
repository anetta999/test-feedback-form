
const FeedbackForm = () => {
  return (
      <>
          <form>
        <label>
          <input type="text" placeholder="Your name*"/>
        </label>
        <label>
          <input type="email" placeholder="Your e-mail*"/>
        </label>
        <textarea placeholder="Your message*"></textarea>
        <button type="submit">Send message</button>
      </form>
      </>
  )
}

export default FeedbackForm;