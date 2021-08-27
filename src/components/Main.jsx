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
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  });
  const [textInput, setTextInput] = useState(null);
  const [nameInput, setNameInput] = useState(null);
  const [email, setEmail] = useState(null);
  const [submit, setSubmit] = useState(null);

  console.log("Inside State: ", {
    rating,
    activity,
    textInput,
    nameInput,
    email,
    submit
  });

  const handleRatingCheckbox = (event) => {
    console.log("Inside handleRatingCheckbox: ", event.target.value);
    const value = parseInt(event.target.value, 10);
    setRating(value);
  };

  const handleActivityCheckbox = (event) => {
    console.log(
      "Inside handleActivityCheckbox: ",
      event.target.checked,
      event.target.value
    );
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    const updatedActivity = {
      ...activity,
      [targetValue]: isChecked
    };
    setActivity(updatedActivity);
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
    console.log("Inside handleEmailInput: ", event.target.value);

    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Inside Submit: ");
    event.preventDefault();
    const dataInputed = {
      rating: rating,
      activity: activity,
      textInput: textInput,
      nameInput: nameInput,
      email: email
    };
    if (dataInputed) {
      console.log("Send To Server: ", dataInputed);
    }
  };

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
          <TextAreaInput
            handleTextInput={handleTextInput}
            textInput={textInput}
          />
          <NameInput handleNameInput={handleNameInput} nameInput={nameInput} />
          <EmailInput handleEmail={handleEmail} email={email} />
          <Submit handleSubmit={handleSubmit} />
        </form>
      </section>
    </main>
  );
}

export default Main;
