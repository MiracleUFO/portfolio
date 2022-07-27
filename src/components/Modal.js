import DocumentView from './DocumentView';
import { ModalWrapper, ModalContainer, ModalContent } from '../styles/Modal';

const Modal = ({ show, setShow, options }) => {
    const close = () => {
        setShow(false);
        document.body.style.zoom = (document.body.style.zoom && window.innerWidth < 800) ?? '100%';
    };

    return (
        <ModalWrapper 
            show={show}
            onClick={close} 
        >
            <ModalContainer
                show={show}
                type={options.type}
                onClick={e => e.stopPropagation()}
            >
                <ModalContent>
                    <section className='close-icon' onClick={close}>
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