import React from 'react';
// import './Portfolio.css';

function PortfolioItems({ items }) {
    return (
        <>
            {/* my main item section  */}
            <div className="mt-5 menu-items container-fluid">
                <div className="row">
                    <div className="mx-auto col-11">
                        <div className="my-5 row">

                            {/* Lopping  */}

                            {
                                items.map((elem) => {
                                    const { id, image, category, Link } = elem;

                                    return (

                                        <div className="my-5 item1 col-12 col-md-6 col-lg-12 col-xl-4" key={id}>
                                            <div className="row Item-inside">
                                                {/* for images */}

                                                <div className="col-12 col-md-12 col-lg-12 img-div">
                                                    <a href={Link}>
                                                        <img src={image} alt="imges" className="img-fluid" />
                                                    </a>

                                                </div>
                                                {/* menu discripation  */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="pt-4 pb-3 main-title">
                                                        {/* <h1> MERN </h1>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, autem.</p> */}
                                                    </div>
                                                    {/* <a href="https://tahapay-c4f2e.web.app">
                                        <button className="rounded-3 btn-success"> Visit </button>
                                    </a> */}
                                                </div>
                                                {/* menu end  */}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioItems;
