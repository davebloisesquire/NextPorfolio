import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold my-2">Contact Me</h1>
            <p>You can reach me at my email: <a className='text-pink-300 hover:text-pink-600 transition-all duration-500' href="mailto:davebloisesquire@gmail.com">davebloisesquire@gmail.com</a>.</p>

            <ContactForm/>
        </div>
    )
}

export default Contact