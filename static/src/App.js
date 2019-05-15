import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const la_streams = [
  { stream: "Leadership" },
  { stream: "Design" },
  { stream: "Data Analysis" },
  { stream: "Digital Government" },
  { stream: "AI / ML" },
  { stream: "DevOps" }
];

// UI

const ControlStreamSelector = (props) => {
  const { handleControlChange } = props;
  const ctrl = la_streams.map((item, index) => (
    <span key={"or_lat" + index} className="p-inline-cb">
      <label htmlFor={"or_lat" + index}>
        <input type="checkbox" name="or_lat" value={item.stream} id={"or_lat" + index} onChange={handleControlChange} />
        <span>{item.stream}</span>
      </label>
    </span>
  ));
  return (
    <div>
      <h5><i className="material-icons">done_all</i> What is it related to?</h5>
      {ctrl}
    </div>
  );
}

const ControlURLInput = (props) => {
  const { handleControlChange, value } = props;
  return (
    <div>
      <div className="input-field">
        <h5><i className="material-icons">add</i> Add Content to Digital Open Learning</h5>
        <input id="or_url" type="text" name="or_url" value={value} placeholder="Paste your content URL here." onChange={handleControlChange} />
      </div>
    </div>
  );
}

const ControlURLSubmit = (props) => {
  const { btn, handleSave } = props;
  return (
    <button id="btnSubmit" onClick={handleSave} className="btn btn-large waves-effect teal darken-2" type="submit">
      {btn}
    </button>
  )
}

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <a href="#!" className="brand-logo center">{title}</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="#!">Digital Open Learning</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const Layout = (props) => {
  const { handleControlChange, handleSave, or_lat, or_url } = props;
  return (
    <div className="App">
      <Header title="OpenRegistry" />
      <main>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <form id="form">
                <div className="row">
                  <div className="col s12 m12">
                    <ControlURLInput value={or_url} handleControlChange={handleControlChange} />
                  </div>
                  <div className="col s12 m12">
                    <ControlStreamSelector value={or_lat} handleControlChange={handleControlChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 center">
                    <ControlURLSubmit btn="Send to DOL" handleSave={handleSave} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

class App extends React.Component {
  state = {
    or_url: "",
    or_lat: []
  }

  // Control
  handleControlChange = event => {
    //alert(`change ${event.target.value}`);
    let streams = this.state.or_lat;
    if (event.target.type === "checkbox") {
      if (streams.includes(event.target.value)) {
        streams = streams.filter(function (el) {
          return el !== event.target.value;
        });
      } else {
        streams.push(event.target.value);
      }
    }
    event.target.type === "checkbox" ?
      (
        this.setState({ [event.target.name]: streams })
      ) : (
        this.setState({ [event.target.name]: event.target.value })
      )
  }
  handleSave = async e => {
    e.preventDefault();
    let api_url = "/openapi/openregistery/opencontent";
    let api_post = {
      "or_url": this.state.or_url,
      "or_lat": this.state.or_lat,
      "occurred_at": (new Date()).toISOString()
    };
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(api_post),
    });
    const r = await response;
    // set response to state when needed...
    //.json();//response.text();
    //this.setState({
    //  responseToPost: body
    //});
    //alert(JSON.stringify(body));
    alert(`${r.status}\n${api_url}\n${JSON.stringify(api_post)}`);
  }

  render() {
    return (
      <Layout or_lat={this.state.or_lat} or_url={this.state.or_url} handleControlChange={this.handleControlChange} handleSave={this.handleSave} />
    );
  }
}

export default App;
