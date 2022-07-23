import { useState } from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { DocumentViewContainer } from '../styles/DocumentView';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import DownloadBtn from './DownloadBtn';

const DocumentView = ({ file }) => {
    const [numberOfPages, setNumberOfPages] = useState(null);

    const onLoadSuccess = ({ numPages }) => {
        setNumberOfPages(numPages);
    };

    return (
        <DocumentViewContainer>
            <div className='download-container'>
                <DownloadBtn url='CV.pdf' />
            </div>

            <Document file={file} onLoadSuccess={onLoadSuccess}>
                {[...Array(numberOfPages)].map((x, i) =>
                    <Page key={i} pageNumber={i + 1} />
                )}
            </Document>
        </DocumentViewContainer>
    )
};

export default DocumentView;