import styles from "../styles/Form.module.css";

export default function ContactForm() {
  return (
    <div className={styles.formWrapper}>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label>
            First Name
            <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="comments">
            Message
            <textarea id="comments" name="comments" />
          </label>
        </div>
      </form>
      {/* test */}
      <button type="submit">Submit</button>
    </div>
  );
}
