import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './Formula.css';

export default ({ title, description, path = "/" }) => <div className="UI Formula col-xxl-3 col-xl-4 col-lg-4 col-md-6 pb-4">
    <div className="block d-flex flex-column">
        <div className="d-flex border-bottom pb-4 mb-4">
            <div className="title text-20 text-700 pr-5 flex-fill text-ellipsis-2" style={{ height: 58 }}>{title}</div>

            <div><FontAwesomeIcon icon={faInfoCircle} className="icon text-23" /></div>
        </div>

        <div className="description flex-fill d-flex flex-column">
            <div className="flex-fill">{description}</div>

            <div className="text-right">
                <Link to={path} className="btn btn-white text-darkblue text-12">
                    Télécharger<FontAwesomeIcon icon={faFileDownload} className="text-red ml-3 text-16" />
                </Link>
            </div>
        </div>
    </div>
</div>;