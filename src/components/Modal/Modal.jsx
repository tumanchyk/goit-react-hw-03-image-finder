import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalEl } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = e => {
        if (e.code === 'Escape') {
          this.props.onClose();
        }
      };
    
      handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
          this.props.onClose();
        }
      };
      render(){
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <ModalEl>
            {this.props.children}
            </ModalEl>
        </Overlay>,
        modalRoot,
    )}
}
Modal.propTypes ={
  onClose: PropTypes.func.isRequired,
}