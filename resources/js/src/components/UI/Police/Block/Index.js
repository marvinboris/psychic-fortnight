import React from 'react';

export default ({ style, children, full, title, color = 'white', subtitle }) => <div className={full ? "" : ("py-5 bg-" + color)} style={style}>
    {full ? children : <div className="container text-dark">
        <div className="text-center mb-5">
            <div className="text-35 text-700 text-blue">
                {title}

                <div className="d-flex justify-content-center align-items-center">
                    <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>

                    <div className="px-2"><div className="rounded-circle border border-blue" style={{ height: 8, width: 8 }} /></div>

                    <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>
                </div>
            </div>

            <div className="text-secondary row justify-content-center">
                <div className="col-md-10 text-25 col-lg-8">{subtitle}</div>
            </div>
        </div>

        {children}
    </div>}
</div>;