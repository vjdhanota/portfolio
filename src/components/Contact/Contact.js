import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";
import { MainText } from "../Shared";

const Contact = props => {
  const ContactInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 2px solid ${props => props.borderColor};
    border-radius: 4px;
    box-sizing: border-box;
    &:focus {
      outline-width: 1px;
    }
  `;
  const ContactInputSubmit = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 2px solid #dce9fb;
    border-radius: 4px;
    box-sizing: border-box;
    transition: 0.3s;
    &:hover {
      background: #dce9fb;
      cursor: pointer;
    }
  `;
  const ContactTextArea = styled.textarea`
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    width: 100%;
    border: 2px solid #ffdfdf;
    border-radius: 4px;
    resize: vertical;
    box-sizing: border-box;
    &:focus {
      outline-width: 1px;
    }
  `;

  const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  `;
  return (
    <div>
      <MainText>Contact Me</MainText>
      <br />
      <ContactContainer>
        <form
          style={{ width: "70%" }}
          action="https://formspree.io/dhanota.vijay@gmail.com"
          method="POST"
        >
          <label for="name">Name</label>
          <ContactInput type="text" name="name" borderColor="#e1f7d5" />
          <label for="_replyto">Email</label>
          <ContactInput type="email" name="_replyto" borderColor="#e6deff" />
          <label for="message">Message</label>
          <ContactTextArea rows="8" type="message" name="message" />
          <ContactInputSubmit type="submit" value="Send" />
        </form>
      </ContactContainer>
    </div>
  );
};

export default Contact;
