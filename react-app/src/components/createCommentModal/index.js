import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateCommentsPage from '../createComment';

function CreateCommentModal({value}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentsPage value={value} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
