import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './resume.css';
import resume from '../assets/Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; // set the workerSrc to the URL of the worker script

export default function ResumePage() {
    return (
        <div className="resume-page">
            <Document file={resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}