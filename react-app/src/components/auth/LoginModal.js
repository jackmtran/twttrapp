import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm.js';
import './logmodal.css'

function LoginModal({value}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm value={value} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
