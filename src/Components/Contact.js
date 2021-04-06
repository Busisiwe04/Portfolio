import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbybbaz");
  if (state.succeeded) {
      return <p><h1>Bye!! I will get back to you</h1></p>;
  }
  
  return (
    <section id="contact">
       <div className="row section-head">
          <div className="two columns header-col">
             <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
          </div>
       </div>
       <div className="row">
          <div className="eight columns">
           <form onSubmit={handleSubmit}>
    <label htmlFor="email">
      Email Address
    </label>
    <input
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <textarea
      id="message"
      name="message"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form>

    </div>
 </div>
 </section>
  )
}
function App() {
  return (
    <ContactForm />
  );
  }
  export default App;