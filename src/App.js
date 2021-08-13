import React from 'react';
import Home from './pages/Home';
import Loading from './pages/Loading';
import About from './pages/About';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    }

    this.loading = this.loading.bind(this);
    this.page = this.page.bind(this);
    this.loadAll = this.loadAll.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
    })
  }

  loading() {
    return (
      <>
        <Loading />
      </>
    );
  }

  page() {
    return (
      <>
        <header id="header">
          a
        </header>
        <Home />
        <About />
      </>
    );
  }

  loadAll() {
    this.loading();
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        { loading && this.loading() }
        { loading && this.page() }
        { !loading && this.page() }
      </div>
    );
  }
}

export default App;
