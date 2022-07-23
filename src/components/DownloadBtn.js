import { FaDownload } from 'react-icons/fa';

import { DownloadContainer, IconCircle } from '../styles/DownloadBtn';

const DownloadBtn = ({ url }) => (
    <DownloadContainer href={url} download>
        <IconCircle className='icon'>
            <FaDownload />
        </IconCircle>
        <span className='text'>Download</span>
    </DownloadContainer>
);

export default DownloadBtn;