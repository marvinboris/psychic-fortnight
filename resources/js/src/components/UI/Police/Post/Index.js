import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faNewspaper, faShare } from '@fortawesome/free-solid-svg-icons';

import { convertDate, convertTime } from '../../../../shared/utility';

import './Post.css';

export default ({ title, body, created_at, photo, slug = '' }) => <div className="UI Post pb-4 px-3 text-dark">
    <div className="shadow p-3 rounded-30">
        <div className="embed-responsive embed-responsive-16by9 position-relative rounded-30 mb-4" style={{ backgroundImage: 'url("' + photo + '")', overflow: 'visible' }}>
            <div className="border border-6 border-white rounded-circle d-flex justify-content-center align-items-center position-absolute mr-5" style={{ right: 0, bottom: 0, transform: 'translateY(50%)' }}>
                <Link to="/" className="btn btn-blue rounded-circle" style={{ width: 36, height: 36 }}>
                    <FontAwesomeIcon icon={faShare} />
                </Link>
            </div>
        </div>
        
        <div className="my-3 text-uppercase text-20 text-truncate text-500 w-100 pb-2 border-bottom border-border text-darkblue">
            <FontAwesomeIcon icon={faNewspaper} className="text-blue text-14 mr-2" fixedWidth />

            {title}
        </div>

        <div className="text-14 text-300 text-secondary mb-3">{body}</div>

        <div>
            <div className="d-inline-flex align-items-center mr-3 rounded bg-green-20 text-green p-1">
                <div className="pr-1 border-right border-green-50 mr-1 text-14"><FontAwesomeIcon icon={faCalendar} fixedWidth className="px-1" /></div>

                <div className="px-1 text-9">{convertDate(created_at)}</div>
            </div>

            <div className="d-inline-flex align-items-center rounded bg-orange-20 text-orange p-1">
                <div className="pr-1 border-right border-orange-50 mr-1 text-14"><FontAwesomeIcon icon={faClock} fixedWidth className="px-1" /></div>

                <div className="px-1 text-9">{convertTime(created_at)}</div>
            </div>
        </div>
    </div>
</div>;