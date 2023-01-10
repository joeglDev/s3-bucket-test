import './App.css';
import { uploadObject } from './API/sample';

function App() {
  return (
    <>
    <h1>Hi</h1>
    <button onClick={uploadObject}>Upload test image</button>
    </>

  );
}

export default App;
