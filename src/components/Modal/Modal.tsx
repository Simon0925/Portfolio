import React from 'react';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { clearData } from '../../store/edit/edit.slice';

interface ModalProps {
    content?: React.ReactNode;
    close:(e:boolean) => void
  }


  const Modal = React.memo(function Modal({ content,close }: ModalProps) {
    const dispatch = useDispatch();

    const closeModal =() =>{
      close(true)
      dispatch(clearData())
    }


    return (
      <div
        className="fixed flex items-center justify-center flex-col top-0 left-0 w-full h-full z-50  bg-modal"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-text"
      >
       
        <div className='flex items-center justify-center flex-col gap-2 '>
          {content}
          <div onClick={closeModal} className='w-96  flex '>
            <Button name={"close"} color={"blue"} />
          </div>
        </div>
      </div>
    );
  });
  
  export default Modal;