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
          <Modal.Body>Body</Modal.Body>
          <Modal.Title>Footer</Modal.Title>
        </Modal>
        <NameCard 
          name="Arnar Leifsson"
          email="arnarl@ru.is"
          telephone="354-777-7777"
          imageUrl="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-256.png"
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
