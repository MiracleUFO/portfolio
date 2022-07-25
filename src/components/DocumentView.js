import { useState } from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import DownloadBtn from './DownloadBtn';

import { DocumentViewContainer } from '../styles/DocumentView';

const DocumentView = ({ file }) => {
    const [numberOfPages, setNumberOfPages] = useState(null);
    const [loadSuccess, setLoadSuccess] = useState(false)

    const onLoadSuccess = ({ numPages }) => {
        setNumberOfPages(numPages);
        setLoadSuccess(true);
    };

    return (
        <DocumentViewContainer>
            {loadSuccess ?
                <div className='download-container'>
                    <DownloadBtn url='MiracleUFO_Resume.pdf' />
                </div>
            :   null
            }
            
            <Document file={file} onLoadSuccess={onLoadSuccess}>
                {[...Array(numberOfPages)].map((x, i) =>
                    <Page key={i} pageNumber={i + 1} />
                )}
            </Document>
        </DocumentViewContainer>
    )
};

export default DocumentView;