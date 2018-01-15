console.log('App.js is running');
const appRoot = document.getElementById('app')


const app = {
  heading: 'My App',
  subheading: 'This is my first app in this course.',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFormSubmit();
  }
};

const reset = () => {
  app.options = [];
  renderFormSubmit();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const renderFormSubmit = () => {
    const template = (
    <div>
      <h1>{app.heading}</h1>
      {app.subheading && <p>{app.subheading}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0}onClick={makeDecision}>What should I do?</button>
      <button onClick={reset}>Remove All</button>
      <ol>
        {
          app.options.map((option) =>  <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

renderFormSubmit();
