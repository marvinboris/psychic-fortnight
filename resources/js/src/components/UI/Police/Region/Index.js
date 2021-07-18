import React from 'react';

export default ({ name, info }) => <div className="UI Region col-xl-4 col-md-6 pb-4">
    <div className="bg-white h-100 rounded-15 overflow-hidden">
        <div className="bg-lightblue-15 h-100 d-flex flex-column pt-5 px-4 pb-4">
            <div className="text-700 text-nightblue text-16 text-md-20 text-xxl-25 text-uppercase mb-2">{name}</div>

            <div className="text-secondary text-12 text-md-15 text-xxl-18 flex-fill mb-4" dangerouslySetInnerHTML={{ __html: info }} />

            <div className="bg-lightblue rounded-15 d-flex align-items-center py-3 px-4">
                <div className="mr-4">
                    <div className="rounded-pill bg-white py-1 pl-1 pr-4 d-flex align-items-center">
                        <div className="mr-2">
                            <div className="bg-blue rounded-circle d-flex justify-content-center align-items-center text-white" style={{ width: 40, height: 40 }}>
                                <i className="fad fa-phone-plus text-10 text-md-12 text-xxl-14" />
                            </div>
                        </div>

                        <div className="text-secondary text-11 text-md-13 text-xxl-15">Appeler</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>