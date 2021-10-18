const Button = ({ text, actionOnClick, disabled }) => {
  return (
    <button class="button" onClick={actionOnClick} disabled={disabled}>
      {text}
    </button>
  );
};
export default Button;
