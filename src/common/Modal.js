import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

function Modal({
  children,
  footer,
  onClose,
  title,
  ...rest
}) {
  // compontentDidMount
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  const footerSection = footer && (
    <div className="modal-footer">
      { footer }
    </div>
  )

  return (
    <ReactModal
      {...rest}
      onRequestClose={onClose}
      className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{ title }</h5>
          <button
            onClick={onClose}
            type="button"
            className="close">
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          { children }
        </div>
        { footerSection }
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

Modal.defaultProps = {
  children: null,
  footer: null,
  onClose: () => {},
  title: 'Modal',
}

export default Modal;
