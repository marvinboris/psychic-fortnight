import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ name, icon, info }) => <div className="UI Info col-lg-4 col-md-6 pb-4">
    <div className="h-100 bg-lightblue-15 rounded-15">
        <div className="mx-auto d-flex flex-column h-100 pb-3" style={{ width: 300 }}>
            <div className="rounded-bottom-15 text-white bg-blue text-center text-18 py-4 px-3 w-100 text-truncate">{name}</div>

            <div className="flex-fill d-flex flex-column justify-content-center py-4 py-lg-5">
                <div className="text-blue">
                    <FontAwesomeIcon icon={icon} className="mr-4 text-30" /><span className="text-700 text-25">{info}</span>
                </div>
            </div>
        </div>
    </div>
</div>;