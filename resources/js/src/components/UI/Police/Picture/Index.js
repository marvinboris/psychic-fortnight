import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './Picture.css';

export default ({ title, photo, description }) => <div className="UI Picture col-xl-4 pb-4 px-2 px-xl-3">
    <div className="embed-responsive embed-responsive-4by3 position-relative">
        <div className="position-absolute w-100 h-100 background" style={{ backgroundImage: `url("${photo}")` }} />

        <div className="position-absolute w-100 bg-black-50 px-4 pt-4 pb-5" style={{ bottom: 0, left: 0 }}>
            <div className="d-flex pb-4 mb-4 border-bottom border-border position-relative">
                <div className="position-absolute ml-5" style={{ bottom: 0, transform: 'translateY(50%)' }}>
                    <FontAwesomeIcon icon={faCircle} className="text-orange" />
                </div>

                <div className="text-500 text-white text-14 text-md-17 text-xxl-20">{title}</div>

                <div className="ml-auto">
                    <Link to="/" className="text-orange text-decoration-none text-14 text-md-17 text-xxl-20">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Link>
                </div>
            </div>

            <div className="text-10 text-md-13 text-xxl-16 text-white text-ellipsis-2">{description}</div>
        </div>
    </div>
</div>;