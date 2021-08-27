import { useState } from "react";
import Activity from "./Activity";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import Rating from "./Rating";
import Submit from "./Submit";
import TextAreaInput from "./TextAreaInput";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rating, setRating] = useState(false);
  const [activity, setActivity] = useState({
    Swimming: false,
    Bathing: false,
    Chatting: false,
    NoActivity: false
  });
  const [textInput, setTextInput] = useState(null);
  const [nameInput, setNameInput] = useState(null);
  const [email, setEmail] = useState(null);
  const [submit, setSubmit] = useState(null);

  const handleActivityCheckbox = (event) => {
    console.log("Inside handleActivityCheckbox: ", event.target.checked);
    setActivity(event.target.checked);
  };

  const handleRatingCheckbox = (event) => {
    console.log("Inside handleRatingCheckbox: ", event.target.value);

    setRating(event.target.value);
  };

  const handleTextInput = (event) => {
    console.log("Inside handleTextInput: ", event.target.value);

    setTextInput(event.target.value);
  };

  const handleNameInput = (event) => {
    console.log("Inside handleNameInput: ", event.target.value);

    setNameInput(event.target.value);
  };

  const handleEmail = (event) => {
    console.log("Inside handleNameInput: ", event.target.value);

    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Inside Submit: ");
    setSubmit();
  };

  const dataInputed = {
    rating: rating,
    activity: activity,
    textInput: textInput,
    nameInput: nameInput,
    email: email,
    submit: submit
  };
  if (rating || activity || textInput || nameInput || email || submit) {
    console.log("Send to Server: ", dataInputed);
  }
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <Rating handleRatingCheckbox={handleRatingCheckbox} />

          <Activity
            handleActivityCheckbox={handleActivityCheckbox}
            activity={activity}
          />
          <TextAreaInput handleTextInput={handleTextInput} />
          <NameInput handleNameInput={handleNameInput} />
          <EmailInput handleEmail={handleEmail} />
          <Submit handleSubmit={handleSubmit} />
        </form>
      </section>
    </main>
  );
}

export default Main;
