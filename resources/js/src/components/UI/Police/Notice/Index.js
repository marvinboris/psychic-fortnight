import React from 'react';

import './Notice.css';

export default ({ title, recent }) => <div className={"UI Notice " + (recent ? "recent" : "") + " px-md-2 pt-5"} style={recent && { height: 412 }}>
    <div className={"position-relative rounded-15 bg-" + (recent ? "white border border-8 border-lightblue shadow-sm" : "lightblue-35") + " py-5 px-4 text-center d-flex justify-content-center align-items-center"} style={recent && { top: -32 }}>
        {recent && <div className="position-absolute bg-green text-16 text-white rounded-8" style={{ top: 0, right: 90, padding: '12px 39px', transform: 'translateY(-50%)' }}>Récent</div>}

        <div className={recent ? "my-4 py-2" : "m-3"}>
            <div className={"text-" + (recent ? "30 text-500" : "25") + " d-none d-md-block"}>{title}</div>
            <div className={"text-" + (recent ? "20 text-500" : "18") + " d-md-none"}>{title}</div>
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