import React, { useState } from 'react';
import { Form, Message, Transition } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

import './ContactForm.css';

export default function ContactForm() {
  const [show, setShow] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonBasic, setButtonBasic] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ai3cvun',
      'contact_form',
      e.target,
      'user_yDVSGKQbFFfb6sRyJIPDJ'
    );

    setShow(true);

    setTimeout(() => {
      setShow(false);
      setFirstName('');
      setlastName('');
      setEmail('');
      setMessage('');
    }, 7000);
  };

  const handleMouseDown = () => {
    setButtonColor('red');
    setButtonBasic(true);
  };

  const handleMouseUp = () => {
    setButtonColor('red');
    setButtonBasic(false);
  };

  const handleChange = (e, value) => {
    setFirstName(value);
    setlastName(value);
    setEmail(value);
    setMessage(value);
  };

  return (
    <Form success onSubmit={e => sendEmail(e)} className="ContactForm">
      <p className="ContactTitle">04. Contact</p>
      <Form.Input
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={() => handleChange()}
        placeholder="Bob"
      />
      <Form.Input
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={() => handleChange()}
        placeholder="Smith"
      />
      <Form.Input
        label="Email"
        name="email"
        value={email}
        onChange={() => handleChange()}
        placeholder="youremail@example.com"
      />
      <Form.TextArea
        label="Message"
        name="message"
        value={message}
        onChange={() => handleChange()}
        placeholder="Write your message here..."
      />
      <Transition
        visible={show}
        transitionOnMount={false}
        unmountOnHide={false}
        animation="fade"
        duration={2000}
      >
        <Message
          success
          header="Form Submitted"
          content="You have sent a message. Thank you."
        />
      </Transition>

      <Form.Button
        className="HomeButton"
        onMouseDown={() => handleMouseDown()}
        onMouseUp={() => handleMouseUp()}
        // onClick={() => handleSubmitClick()}
        color={buttonColor}
        basic={buttonBasic}
        style={{ margin: '0', marginLeft: '0' }}
      >
        Submit
      </Form.Button>
    </Form>
  );
}
