import React, { FunctionComponent } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  modalMessage: string;
  success: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({
  showModal,
  closeModal,
  modalMessage,
  success,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center ${
        showModal ? 'visible' : 'hidden'
      }`}
    >
      <div className="card">
        {success ? (
          <div className="alert alert-info">
            <FaCheck className="w-48 h-48 text-blue-900"></FaCheck>

            <div className="flex flex-col">
              <span>Success</span>
              <span className="text-content2">{modalMessage}</span>
            </div>
          </div>
        ) : (
          <div className="alert alert-error">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z"
                fill="#E92C2C"
              />
            </svg>
            <div className="flex flex-col">
              <span>Error</span>
              <span className="text-content2">{modalMessage}</span>
            </div>
          </div>
        )}

        <button
          className={`bg-${success ? 'blue-900' : 'red-500'} hover:bg-${
            success ? 'green-900' : 'red-700'
          } text-white font-bold py-2 px-4 rounded`}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
