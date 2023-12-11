import style from "../styles/Contact.module.css";
import crowdfunding from "../assets/crowdfunding.png";

const Contact = () => {
  const handleContact = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    alert("Successfully send the message!");
    name.value = "";
    email.value = "";
    message.value = "";
  };

  return (
    <section className={style.contact}>
      <img src={crowdfunding} alt="fundraise" />

      <form className={style.form} onSubmit={handleContact}>
        <h1>Get in Touch With Us</h1>
        <div className={style.input_container}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>

        <div className={style.input_container}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div className={style.input_container}>
          <label htmlFor="message">Message</label>
          <textarea id="message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
