
import './App.css';
import { Button } from './Components/Button';
import { Functional } from './Components/Functional';
import Example from './Components/ClassComponent'
import { ControlledComponent } from './Components/ControlledComponent';
import { MemoisedComponent } from './Components/MemoisedComponent';
import PureCount from './Components/PureComponent';
import { PresentationalComponent } from './Components/PresentationalComponent';
import UncontrolledComponent from './Components/UncontrolledComponent';
import  ErrorB  from './Components/ErrorB';
function App() {
  const ButtonControl=()=>{
    alert("Clicked");
  }

  const withMessage = (WrappedComponent) => {
    return (props) => {
      return <WrappedComponent {...props} message="Hello from HOC!" />;
    };
  };
  
  const SimpleComponent = ({ message }) => {
    return <h1>{message}</h1>;
  };
  

  const EnhancedComponent = withMessage(SimpleComponent);

  const BuggyComponent = () => {
    throw new Error("Oops!");
    
  };
  return (
    <div className="App">
  <Button label="Click here" onClick={ButtonControl}/>

  <div>
        Functional component
        <Functional/>

        Class Component
        <Example/>

        Controlled Component
        <ControlledComponent/>

        Uncontrolled Component
        <UncontrolledComponent/>

        Memoised component
        <MemoisedComponent/>

        Pure Component
        <PureCount count={10}/>

        Presentational Component
        <PresentationalComponent msg="example for presentational Component"/>

        Container Component
        <ControlledComponent/>

        High Order Component
        <EnhancedComponent/>

        Error Boundary Component
        <ErrorB>
        <BuggyComponent/>
        </ErrorB>

      </div>
    </div>
  );
}

export default App;
