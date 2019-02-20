import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Constants
import colors from 'constants/colors';

// Common Components
import Panel from 'common/Panel';

const ModalWrapper = styled.div.attrs({
  className: 'modal-content',
})`
  width: 700px;
  margin: 120px auto;

  .panel {
    position: relative;
    padding: 30px;

    .modal-header {
      .modal-title {
        font-size: 26px;
        font-weight: 600;
      }

      .close {
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
        border: none;

        .close-icon {
          &:before,
          &:after {
            position: absolute;
            top: 5px;
            right: 13px;
            content: ' ';
            height: 20px;
            width: 2px;
            background-color: ${colors.gray};
          }

          &:before {
            transform: rotate(45deg);
          }

          &:after {
            transform: rotate(-45deg);
          }
        }

        &:hover {
          .close-icon {
            &:before,
            &:after {
              background-color: ${colors.grayDarkest};
            }
          }
        }
      }
    }

    .modal-footer {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-end;

      button {
        margin: 0;
        margin-left: 10px;
      }
    }
  }
`;

ModalWrapper.displayName = 'ModalWrapper';

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
      <ModalWrapper>
        <Panel>
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
            <button
              onClick={onClose}
              type="button"
              className="close">
              <span className="close-icon"></span>
            </button>
          </div>
          <div className="modal-body">
            { children }
          </div>
          { footerSection }
        </Panel>
      </ModalWrapper>
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
};

export default Modal;
