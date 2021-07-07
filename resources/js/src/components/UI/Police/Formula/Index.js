import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './Formula.css';

export default ({ title, description, path = "/" }) => <div className="UI Formula col-xxl-3 col-xl-4 col-lg-4 px-0 px-md-3 pb-4">
    <div className="block d-flex flex-column">
        <div className="d-flex border-bottom pb-3 pb-md-4 mb-3 mb-md-4">
            <div className="title text-20 text-700 pr-5 d-none d-md-block flex-fill text-ellipsis-2" style={{ height: 60 }}>{title}</div>
            <div className="title text-17 text-700 pr-4 d-md-none flex-fill text-ellipsis-2" style={{ height: 60 }}>{title}</div>

            <div>
                <FontAwesomeIcon icon={faInfoCircle} className="icon text-23 d-none d-md-inline" />
                <FontAwesomeIcon icon={faInfoCircle} className="icon text-20 d-md-none" />
            </div>
        </div>

        <div className="description flex-fill d-flex flex-column">
            <div className="flex-fill">
                <div className="text-16 d-none d-md-block">{description}</div>
                <div className="text-13 d-md-none">{description}</div>
            </div>

            <div className="text-right pt-3">
                <Link to={path} className="btn btn-white text-darkblue text-12 d-none d-md-inline">Télécharger<FontAwesomeIcon icon={faFileDownload} className="text-red ml-3 text-16" /></Link>
                <Link to={path} className="btn btn-white text-darkblue text-10 d-md-none">Télécharger<FontAwesomeIcon icon={faFileDownload} className="text-red ml-3 text-14" /></Link>
            </div>
        </div>
    </div>
</div>;