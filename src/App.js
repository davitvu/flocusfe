import classNames from 'classnames/bind'

const cx = classNames.bind()

function App() {
  return (
    <div className={cx('header')}>
      <header className="App-header">
        <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;
