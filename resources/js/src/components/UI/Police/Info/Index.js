import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Info.css';

export default ({ name, icon, info }) => <div className="UI Info col-lg-4 col-md-6 pb-4">
    <div className="h-100 bg-lightblue-15 rounded-15">
        <div className="mx-auto d-flex flex-column h-100 pb-3 block-container">
            <div className="rounded-bottom-15 text-white bg-blue text-center py-3 py-lg-4 px-3 w-100 text-truncate">
                <div className="text-18 d-none d-md-inline">{name}</div>
                <div className="text-12 d-md-none">{name}</div>
            </div>

            <div className="flex-fill d-flex flex-column justify-content-center py-4 py-lg-5 text-blue">
                <div className="text-30 d-none d-md-inline"><FontAwesomeIcon icon={icon} className="mr-4" /><span className="text-700 text-25">{info}</span></div>
                <div className="text-20 d-md-none"><FontAwesomeIcon icon={icon} className="mr-3" /><span className="text-700 text-16">{info}</span></div>
            </div>
        </div>
    </div>
</div>;