import { close } from '../helpers/modalLogic';
import DocumentView from './DocumentView';

import { ModalWrapper, ModalContainer, ModalContent } from '../styles/Modal';
import '../styles/Modal.css';

const Modal = ({ typeOptions }) => (
    <ModalWrapper id='modal-wrapper' onClick={close}>
        <ModalContainer
            id='modal' 
            className='modal-hidden'
            type={typeOptions.type}
            onClick={e => e.stopPropagation()}
        >
            <ModalContent>
                <section  className='close-icon' onClick={close}>X</section>

                <section>
                    {typeOptions.type === 'file' ?
                        <DocumentView file={typeOptions?.file} />
                    :  null /* for Form */
                    }
                </section>
            </ModalContent> 
        </ModalContainer>
    </ModalWrapper>
);

export default Modal;