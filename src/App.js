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
import CartoonNetworkSpinner from "./components/CartoonNetworkSpinner/CartoonNetworkSpinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tab: 1
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
              'https://t1.rbxcdn.com/12859a4e26433b868b22ab48ac1ce5b2',
              'https://vignette.wikia.nocookie.net/cartoon-network-characters/images/6/6a/Skips_character.png/revision/latest?cb=20130310180547',
              'http://moziru.com/images/cartoon-network-clipart-4.png',
              'http://big5kayakchallenge.com/wp-content/uploads/ktz/cool-cartoon-network-characters-wiki-image-bubbles-2016-design-the-cartoon-network-wiki-cartoon-network-characters-wiki-35bunbhbzb2sw4jz2jlpmy.png',
              'http://images6.fanpop.com/image/photos/32600000/Vana-cartoon-networks-sidekick-32646899-160-300.png',
              'http://i.imgur.com/Xx1ORD5.png',
              'https://vignette.wikia.nocookie.net/parody/images/e/ed/Gumball_watterson_cartoon_network.png/revision/latest?cb=20150808071702',
              'https://vignette.wikia.nocookie.net/powerpuff/images/c/ca/Stylowi_pl_hobby_bojka--postacie-z-atomowki--cartoon-network_8140914.png/revision/latest?cb=20150724164644',
              'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/7/18/enhanced/webdr05/enhanced-7218-1428446543-1.png',
              'http://i.imgur.com/4EViWPk.png',
              'http://www.indiewire.com/wp-content/uploads/2013/10/adventure-time.png'
            ]}
            size="medium"/>
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
            theme="light"
            layout="horizontal"
            onSelect={newTab => this.setState({tab: newTab})}
            currentSelectedTab={this.state.tab}>
            <Tab selectionKey={1} title="Tab 1">
              Content 1
            </Tab>
            <Tab selectionKey={2} title="Tab 2">
              Content 2
            </Tab>
            <Tab selectionKey={3} title="Tab 3">
              Content 3
            </Tab>
          </Tabs>
          <CartoonNetworkSpinner interval={4}/>
        </div>
      </div>
    );
  }
};

export default App;
