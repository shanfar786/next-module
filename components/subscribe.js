import React from "react";
import { Container, Button } from "react-bootstrap";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import Form from "./form";

const Subscribe = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <section className="subscribe-style-one">
        <Container>
          <div className="subscribe-sec">
            <h3 className="text-center">
              Curated destination content for you
            </h3>
            <p className="text-center">Signup now to get your weekly travel inspiration !</p></div>
          <div className="text-center"
          >
            <Button variant="light" className="subscribe-btn" type="submit" onClick={() => setModalOpen(!modalOpen)}>Signup</Button >
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
              <div className=" modal-header">

                <button
                  aria-label="Close"
                  className=" close"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <ModalBody>

                <Form />
              </ModalBody>

            </Modal>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Subscribe;
