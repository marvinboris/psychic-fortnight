import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faNewspaper, faShare } from '@fortawesome/free-solid-svg-icons';

import { convertDate, convertTime } from '../../../../shared/utility';

import './Post.css';

export default ({ title, body, created_at, photo, simple, slug = '' }) => <div className={"UI Post pb-4 px-2 px-md-3 text-dark" + (simple ? " pt-4" : "")}>
    <div className="shadow p-3 rounded-30">
        <div className={"embed-responsive embed-responsive-4by3 position-relative rounded-30 " + (simple ? "" : "mb-4")} style={{ backgroundImage: 'url("' + photo + '")', overflow: 'visible', transform: 'translateY(' + (simple ? '-2rem' : '0') + ')' }}>
            {!simple && <div className="border border-6 border-white rounded-circle d-flex justify-content-center align-items-center position-absolute" style={{ right: 36, bottom: 0, transform: 'translateY(50%)' }}>
                <Link to="/" className="btn btn-blue rounded-circle" style={{ width: 36, height: 36 }}>
                    <FontAwesomeIcon icon={faShare} />
                </Link>
            </div>}
        </div>

        {simple ? <div className="text-500 text-center text-secondary pt-3 mb-4">
            <div className="mb-3">
                <div className="text-16 d-none d-md-block">{title}</div>
                <div className="text-14 d-md-none">{title}</div>
            </div>

            <div className="mx-auto bg-border" style={{ height: .5, width: 200 }} />
        </div> : <div className="my-3 text-uppercase text-truncate text-500 w-100 pb-2 border-bottom border-border text-darkblue">
            <FontAwesomeIcon icon={faNewspaper} className="text-blue text-14 mr-2" fixedWidth />

            <span className="text-20 d-none d-md-block">{title}</span>
            <span className="text-14 d-md-none">{title}</span>
        </div>}

        {!simple && <div className="text-300 text-secondary mb-3">
            <div className="text-14 d-none d-md-block">{body}</div>
            <div className="text-12 d-md-none">{body}</div>
        </div>}

        <div className={"d-flex mb-4 justify-content-" + (simple ? "center" : "start")}>
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