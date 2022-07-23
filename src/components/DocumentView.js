import { useState } from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { DocumentViewContainer } from '../styles/DocumentView';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { FaDownload } from 'react-icons/fa';

const DocumentView = ({ file }) => {
    const [numberOfPages, setNumberOfPages] = useState(null);

    const onLoadSuccess = ({ numPages }) => {
        setNumberOfPages(numPages);
    };

    return (
        <DocumentViewContainer>
            {/*<a href="#" class="btn-slide2">
                <span class="circle2"><i class="fa fa-download"></i></span>
                <span class="title2">Download</span>
                <span class="title-hover2">Click here</span>
            </a>*/}

            <Document file={file} onLoadSuccess={onLoadSuccess}>
                {[...Array(numberOfPages)].map((x, i) =>
                    <Page key={i} pageNumber={i + 1} />
                )}
            </Document>
        </DocumentViewContainer>
    )
};

export default DocumentView;