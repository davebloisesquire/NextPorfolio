const ContactForm = () => {
    return (
        <>
        <input type="text" name="contactFormName" id="contactFormName" placeholder="your name"/>
        <br />
        <input type="email" name="contactFormEmail" id="contactFormName" placeholder="your email"/>
        <br />
        <textarea name="contactFormMessage" id="contactFormMessage" cols="30" rows="10"></textarea>
        <br />
        <button>Submit</button>
        </>
    )
}

export default ContactForm;