import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditTweetsPage from '../editTweet';
import { FiEdit2 } from 'react-icons/fi'


function EditTweetModal({value}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FiEdit2 className='commicon' size='20px' onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTweetsPage value={value} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditTweetModal;
