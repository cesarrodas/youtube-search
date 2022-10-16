import Header from './components/Header';
import SearchField from './components/Search';

import './App.css';

//https://www.cesarrodas.net/cloud/youtube?find=cats

function App() {
  return (
    <> 
      <div className="backdrop">
        <Header />
        <SearchField />
      </div>
    </>
  );
}

export default App;
