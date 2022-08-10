import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditTweetsPage from '../editTweet';
import { FiEdit2 } from 'react-icons/fi'


function EditTweetModal({tweet}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FiEdit2 className='commicon' size='20px' onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTweetsPage tweet={tweet} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditTweetModal;
