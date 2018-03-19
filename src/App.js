import React from "react";
import styles from './App.css';
import Modal from "./components/Modal/Modal";
import NameCard from  "./components/NameCard/NameCard";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Row from "./components/Row/Row";
import Col from "./components/Col/Col";
import Carousel from "./components/Carousel/Carousel";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tab: ''
    };
  }

  render() {
    return (
      <div>
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
          imageUrl="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-256.png"
        />
        <ProgressBar 
          progress={10}
          striped={true}
          animated={true}
          state="info" />
          <Carousel
            images={[
              'https://cdn.dribbble.com/users/1808107/screenshots/4121267/04_finn.gif',
              'https://t1.rbxcdn.com/12859a4e26433b868b22ab48ac1ce5b2'
            ]}
            size="small"/>
        <div className={`${styles.rowContainer}`}>
          <Row>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
          </Row>
          <Row>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
          </Row>
          <Row> 
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
            <Col size={1}></Col>          
            <Col size={1}></Col>
            <Col size={1}></Col>
          </Row>
        </div>
        <div>
          <Tabs
            theme="dark"
            layout="horizontal"
            onSelect={newTab => this.setState({tab: newTab})}
            currentSelectedTab={this.state}>
            <Tab selectionKey={1} title="Tab 1">
              Content 1
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default App;
