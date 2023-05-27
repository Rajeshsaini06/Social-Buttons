const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={`${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div className="buttons">
      <Button text="Like" className="btn1" />
      <Button text="Comment" className="btn2" />
      <Button text="Share" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
