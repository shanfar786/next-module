import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import Form from "./form";
// import { Link as ScrollLink } from "react-scroll";

function NavLinks() {

  const changeColor = () => {
    if(window.scrollY >= 80){
        setColor(true)
    }else{
        setColor(false)
    }
}

  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <Link href="/">
          Explore</Link>
      </li>
      <li>
        <Link href="/help">
          Help</Link>
      </li>
      <li>
        <Link href="/">
          Travel tips</Link>
      </li>
      <li >
        <Link href="/">
          Blog
        </Link>
      </li>


      <Button variant="light" className="head-btn" onClick={() => setModalOpen(!modalOpen)}>
        Signup
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">

          <Button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </Button>
        </div>
        <ModalBody>

          <Form />
        </ModalBody>

      </Modal>



    </ul>



  );
};

export default NavLinks;
