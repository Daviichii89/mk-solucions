import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
      <h2>Contacto</h2>
      <form 
        className={styles.contactForm}
        action="https://formsubmit.co/davichi89@gmail.com"
        method="POST"
      >
        <label htmlFor="name" className={styles.contactLabel}>Nombre</label>
        <input id="name" name="name" type="text" className={styles.contactInput} />
        <label htmlFor="email" className={styles.contactLabel}>Email</label>
        <input id="email" name="email" type="email" className={styles.contactInput} />
        <label htmlFor="subject" className={styles.contactLabel}>Asunto</label>
        <input id="subject" name="subject" type="text" className={styles.contactInput} />
        <label htmlFor="message" className={styles.contactLabel}>Mensaje</label>
        <textarea id="message" name="message" className={styles.contactTextArea}></textarea>
        <button type="submit" className={styles.contactButton}>Enviar</button>
      </form>
    </section>
  )
}
