import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMesage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMesage('Invalid email.');
            } else {
                setErrorMesage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle form', formState);
        }
    };

    return (
        <section>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        name='name'
                        defaultValue={name}
                        onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;