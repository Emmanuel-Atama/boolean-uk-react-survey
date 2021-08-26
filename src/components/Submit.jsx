function Submit(props) {
  return (
    <input
      className="form__submit"
      type="submit"
      value="Submit Survey!"
      onSubmit={props.handleSubmit}
    />
  );
}
export default Submit;
