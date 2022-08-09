import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateCommentsPage from '../createComment';
import { FaRegComment } from 'react-icons/fa'
import './createcommodal.css'

function CreateCommentModal({value}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FaRegComment className='commicon' size='20px' onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentsPage value={value} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
