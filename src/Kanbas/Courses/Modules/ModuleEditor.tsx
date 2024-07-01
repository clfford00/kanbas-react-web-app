import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function ModuleEditor({ dialogTitle, moduleName, setModuleName, addModule, show, handleClose }:
{ dialogTitle: string; moduleName: string; setModuleName: (name: string) => void; addModule: () => void; show: boolean; handleClose: () => void; }) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formModuleName">
            <Form.Label>Module Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter module name"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={addModule}>
          Add Module
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
