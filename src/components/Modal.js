import DocumentView from './DocumentView';
import { ModalWrapper, ModalContainer, ModalContent } from '../styles/Modal';

const Modal = ({ show, setShow, options }) => {
    return (
        <ModalWrapper 
            show={show}
            onClick={() => setShow(false)} 
        >
            <ModalContainer
                show={show}
                type={options.type}
                onClick={e => e.stopPropagation()}
            >
                <ModalContent>
                    <section className='close-icon' onClick={() => setShow(false)}>
                        X
                    </section>

                    <section>
                        {options.type === 'file' ?
                            <DocumentView file={options?.file} />
                        :  null /* for forms */
                        }
                    </section>
                </ModalContent> 
            </ModalContainer>
        </ModalWrapper>
    );
};

export default Modal;