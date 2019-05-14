import React from 'react';
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
    <label key={"ctrl_stream_" + index} className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={"ctrl_stream_cb_" + index}>
      <input type="checkbox" name="ctrl_stream_cb" id={"ctrl_stream_cb_" + index} className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">{item.stream}</span>
    </label>
  ));
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <h5>Category</h5>
        <h6>Select which categories the content belongs to</h6>
        {ctrl}
      </div>
    </div>
  );
}

const ControlURLInput = () => {
  return (
    <div className="mdl-grid">
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-cell mdl-cell--12-col">
        <h5>Add Content to Digital Open Learning</h5>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input"
            id="content_URL" type="text" name="url" placeholder="Paste your content URL here." required
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
          />
          <label className="mdl-textfield__label" htmlFor="content_URL">Content URL</label>
        </div>
      </div>
      <div className="mdl-layout-spacer"></div>
    </div>
  );
}

const ControlURLSubmit = props => {
  const { btn } = props;
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone">
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          {btn}
        </button>
      </div>
    </div>
  )
}

const Header = props => {
  const { title } = props;
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">{title}</span>
        <div className="mdl-layout-spacer"></div>
      </div>
    </header>
  )
}

const Layout = props => {
  return (
    <div className="App">
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="OpenRegistry" />
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--6-col">
              <div className="page-content">
                <form id="form">
                  <ControlURLInput />
                  <ControlStreamSelector />
                  <ControlURLSubmit btn="Submit" />
                </form>
              </div>
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>
        </main>
      </div>
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
