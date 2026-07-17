import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({
  show,
  handleClose,
  handleConfirm,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Confirmation
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Are you sure you want to remove this product?
      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={handleConfirm}
        >
          Remove
        </Button>

      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;