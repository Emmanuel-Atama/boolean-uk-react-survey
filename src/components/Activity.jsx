function Activity(props) {
  return (
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={props.handleActivityCheckbox}
              checked={props.activity}
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
              onChange={props.handleActivityCheckbox}
              checked={props.activity}
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
              onChange={props.handleActivityCheckbox}
              checked={props.activity}
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
              onChange={props.handleActivityCheckbox}
              checked={props.activity}
            />
            NoActivity
          </label>
        </li>
      </ul>
    </div>
  );
}
export default Activity;
