import React from 'react';

import './Notice.css';

export default ({ title, recent }) => <div className={"UI Notice " + (recent ? "recent" : "") + " px-md-2 pt-3 pt-md-4 pt-xxl-5"}>
    <div className={"position-relative rounded-15 bg-" + (recent ? "white border border-8 border-lightblue shadow-sm" : "lightblue-35") + " py-3 py-md-4 py-xxl-5 px-2 px-md-3 px-xxl-4 text-center d-flex justify-content-center align-items-center"}>
        {recent && <div className="position-absolute recent-badge bg-green text-16 text-white rounded-8" style={{ top: 0, transform: 'translateY(-50%)' }}>Récent</div>}

        <div className={recent ? "my-2 my-md-3 my-xxl-4 py-1 py-md-2" : "m-2 m-md-3"}>
            <div className={"text-" + (recent ? "20 text-md-25 text-xxl-30 text-500" : "18 text-md-21 text-xxl-25") + ""}>{title}</div>
        </div>

        {recent && <div className="position-absolute" style={{ top: '100%', marginTop: 8, left: '50%', transform: 'translateX(-50%)' }}>
            <div className="position-relative">
                <div className="bg-blue" style={{ height: 130, width: .5 }} />

                <div className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="border border-blue border-8 rounded-circle bg-white" style={{ width: 30, height: 30 }} />
                </div>
            </div>
        </div>}
    </div>
</div>;