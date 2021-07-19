import React from 'react';

import { updateObject } from '../../../../shared/utility';

import WhiteBg from '../../../../assets/images/white-bg.png';
import GrayBg from '../../../../assets/images/gray-bg.png';

export default ({ style = {}, children, full, left, fluid, title, color = 'white', subtitle }) => <div className={"text-10 text-md-13 text-xxl-16 text-secondary " + (full ? "" : "py-3 py-md-4 py-xxl-5")} style={updateObject(style, {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("' + ({
        white: WhiteBg,
        soft: GrayBg,
    }[color]) + '")'
})}>
    {full ? children : <div className={"container-" + (fluid ? "fluid" : "xxl") + " py-3 py-md-4 py-xxl-5"}>
        {left ? <div className="mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
            <div className="text-700 text-nightblue text-16 text-md-25 text-xxl-35">{title}</div>

            <div className="text-300 text-secondary text-16 text-md-20 text-xxl-25">{subtitle}</div>
        </div> : <div className="text-center mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5">
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
        </div>}

        {children}
    </div>}
</div>;