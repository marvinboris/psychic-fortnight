import React from 'react';

export default ({ style, children, full, fluid, title, color = 'white', subtitle }) => <div className={full ? "" : ("py-5 bg-" + color)} style={style}>
    {full ? children : <div className={"container-" + (fluid ? "fluid" : "xxl") + " text-dark"}>
        <div className="text-center mb-5">
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