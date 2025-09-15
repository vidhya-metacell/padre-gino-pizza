import { useMutation } from "@tanstack/react-query";
import postContact from "./api/postContactForm";


const ContactUs = () => {
  
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });


return (
  <div className="contact">
    <h2>Contact</h2>
    {
      mutation?.isSuccess ? (
        <h3>Submitted!</h3> ) : mutation?.isError ? ( <h3>Not good!</h3> ) : (
          <form onSubmit={mutation.mutate} name="ContactUsForm">
            <input type="text" name="name" required placeholder="Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name="message" id="" required placeholder="Message"></textarea>
            <button type="submit">Contact Us</button>
          </form>
        )
      
    }
    
  </div>
  
)

}

export default ContactUs;