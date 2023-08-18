const StepMessage = ({ step, children }) => {
  const a = 1;
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};
export default StepMessage;
