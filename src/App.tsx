import './App.css';
import { getObject, uploadObject, deleteObject } from './API/sample';


function App() {
  return (
    <>
    <h1>Hi</h1>
    <button onClick={uploadObject}>Upload test object</button>
    <button onClick={getObject}>Get test object</button>
    <button onClick={deleteObject}>Delete test object</button>
   
    </>

  );
}

export default App;
