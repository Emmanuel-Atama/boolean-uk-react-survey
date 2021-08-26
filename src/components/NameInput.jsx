function NameInput(props) {
  return (
    <label>
      Put your name here (if you feel like it):
      <input
        type="text"
        name="username"
        value=""
        onChange={props.handleNameInput}
      />
    </label>
  );
}
export default NameInput;
