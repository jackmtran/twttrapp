import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm.js';


function SignUpModal({value}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign up with an email</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm value={value} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
