import React from 'react';

import { updateObject } from '../../../../shared/utility';

import WhiteBg from '../../../../assets/images/white-bg.png';
import GrayBg from '../../../../assets/images/gray-bg.png';

export default ({ style = {}, children, full, fluid, title, color = 'white', subtitle }) => <div className={full ? "" : "py-3 py-md-4 py-xxl-5"} style={updateObject(style, {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("' + ({
        white: WhiteBg,
        soft: GrayBg,
    }[color]) + '")'
})}>
    {full ? children : <div className={"container-" + (fluid ? "fluid" : "xxl") + " py-3 py-md-4 py-xxl-5 text-dark"}>
        <div className="text-center mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5">
            <div className="text-700 text-blue">
                <div className="text-16 text-md-25 text-xxl-35">{title}</div>

                <div className="d-flex justify-content-center align-items-center">
                    <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>

                    <div className="px-2"><div className="rounded-circle border border-blue" style={{ height: 8, width: 8 }} /></div>

                    <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>
                </div>
            </div>

            <div className="text-secondary row justify-content-center">
                <div className="col-md-10 text-16 text-md-20 text-xxl-25 col-lg-8">{subtitle}</div>
            </div>
        </div>

        {children}
    </div>}
</div>;