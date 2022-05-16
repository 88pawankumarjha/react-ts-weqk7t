import * as React from 'react';
import DarkMode from './components/DarkMode';
import Visualization from './components/Visualization';
import './style.css';

const Checkout = ({ name }) => (
  <h1 className="hoc-function">Check out the {name}!</h1>
);
// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
const NewComponent = simpleHOC(Checkout);

export default function App() {
  return (
    <div>
      {/* https://github.com/recharts/recharts */}
      {/* https://dev.to/alexeagleson/how-to-create-a-dark-mode-component-in-react-3ibg */}
      <div className="visualization">
        <NewComponent name="Visualization" />
        <DarkMode />
        <Visualization />
      </div>
    </div>
  );
}
