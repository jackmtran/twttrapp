import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm.js';


function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign up with an email</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm  setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
