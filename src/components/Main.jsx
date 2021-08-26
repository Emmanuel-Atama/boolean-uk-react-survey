import { useState } from "react";

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
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleRatingCheckbox}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleRatingCheckbox}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleRatingCheckbox}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleRatingCheckbox}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleActivityCheckbox}
                    checked={activity}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleActivityCheckbox}
                    checked={activity}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleActivityCheckbox}
                    checked={activity}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleActivityCheckbox}
                    checked={activity}
                  />
                  NoActivity
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleTextInput}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value=""
              onChange={handleNameInput}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" onChange={handleEmail} />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
