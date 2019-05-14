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

const ControlStreamSelector = () => {
  const ctrl = la_streams.map((item, index) => (
    <span key={"ctrl_stream_" + index} className="p-inline-cb">
      <label htmlFor={"ctrl_stream_cb_" + index}>
        <input type="checkbox" name="ctrl_stream_cb" id={"ctrl_stream_cb_" + index} />
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

const ControlURLInput = () => {
  return (
    <div>
      <div className="input-field">
        <h5><i className="material-icons">add</i> Add Content to Digital Open Learning</h5>
        <input id="content_URL" type="text" name="url" placeholder="Paste your content URL here." />
      </div>
    </div>
  );
}

const ControlURLSubmit = props => {
  const { btn } = props;
  return (
    <button id="btnSubmit" className="btn btn-large waves-effect teal darken-2" type="submit">
      {btn}
    </button>
  )
}

const Header = props => {
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

const Layout = props => {
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
                    <ControlURLInput />
                  </div>
                  <div className="col s12 m12">
                    <ControlStreamSelector />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 center">
                    <ControlURLSubmit btn="Send to DOL" />
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
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
