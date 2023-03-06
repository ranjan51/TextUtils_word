import ComponentsForm from './Components/ComponentsForm';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
  <Navbar title="TextUtils2"/>
  <div className="container my-3">
  <ComponentsForm heading="ENTER THE TEXT TO ANALYZE"/>
  </div>
  
  </>
  );
}

export default App;
