// eslint-disable-next-line react/prop-types
const Button = ({ textcolor, bgColor, onClick, children }) => (
  <button
    type="button"
    style={{ backgroundColor: bgColor, color: textcolor }}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
