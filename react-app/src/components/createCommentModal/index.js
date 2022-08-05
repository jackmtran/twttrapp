import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateCommentsPage from '../createComment';

function CreateCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentsPage setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
