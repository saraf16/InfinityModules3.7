import React from "react";
import './App.css';
import Modal from "./components/Modal/Modal";
import NameCard from  "./components/NameCard/NameCard";
import ProgressBar from "./components/ProgressBar/ProgressBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <p>React here!</p>
        <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>Try modal</button>
        <Modal 
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}>
          <Modal.Title>Title</Modal.Title>
          <Modal.Body>Body. Body body body lorem ipsum.</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
        <NameCard 
          name="Arnar Leifsson"
          email="arnarl@ru.is"
          telephone="354-777-7777"
          imageUrl="https://lh3.googleusercontent.com/-irlki1St3vs/U80d6o1vwMI/AAAAAAAACXw/HXG5AK-vJB4/w699-h698/P1390412-MOTION.gif"
        />
        <ProgressBar 
          progress={80}
          striped={true}
          animated={true}
          state="warning" />
      </div>
    );
  }
};

export default App;
