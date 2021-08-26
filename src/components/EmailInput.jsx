function EmailInput(props) {
  return (
    <label>
      Leave us your email pretty please??
      <input type="email" name="email" value="" onChange={props.handleEmail} />
    </label>
  );
}
export default EmailInput;
