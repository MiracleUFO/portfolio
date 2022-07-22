import { displayModal } from '../helpers/modalLogic';

import Modal from './Modal';

import logoIcon from '../assets/images/ship.webp';
import cv from '../assets/docs/CV.pdf';

import { LogoContainer } from '../styles/UnderConstruction';
import { MainContainer, CopyContainer } from '../styles/Container';
import { Logo, LogoName } from '../styles/Logo';
import { Copy, CopyImp, ActionCopy } from '../styles/Copy';

const UnderConstruction = () => (
    <MainContainer>
        <LogoContainer>
            <Logo 
                src={logoIcon} 
                alt='Image of purple space ship'
            />
            <LogoName>U.F.O.</LogoName>
        </LogoContainer>

        <CopyContainer>
            <h1>Under <br /> Construction</h1>
            <CopyImp>
                I’m currently recreating miracleufo.codes and updating it with my most recent projects and experience.
                If you would like to see a sampling of my work or are interested in starting a project together, <b><i>please get in touch:</i></b>
            </CopyImp>
            <Copy>
                <a href="mailto:miracleufodiama@gmail.com">miracleufodiama@gmail.com</a>
            </Copy>
            <ActionCopy className='view-cv' onClick={displayModal}>
                <span>View Resume</span>
            </ActionCopy>
        </CopyContainer>

        <Modal typeOptions={{type: 'file', file: cv}} />
    </MainContainer>
);

export default UnderConstruction;