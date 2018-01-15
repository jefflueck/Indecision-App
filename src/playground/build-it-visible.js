class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility(e){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
    console.log(this.state)
  }
  render() {
    return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visibility && (
            <div>
              <p>Here are some details to read!</p>
            </div>
          )}
        </div>
      )
    }
  }

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
