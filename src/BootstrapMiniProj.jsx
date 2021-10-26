import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const BootstrapMiniProj = () => {
    return (
        <>
            <h1 className="text-center text-danger text-capitalize mt-5">Bootstrap Cards Example</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{width:"18rem"}}>
                            <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." height="200px"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="http://localhost:3000/" className="btn btn-outline-success">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{width:"18rem"}}>
                            <img src="https://picsum.photos/200/202" className="card-img-top" alt="..." height="200px"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="http://localhost:3000/" className="btn btn-outline-danger">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{width:"18rem"}}>
                            <img src="https://picsum.photos/200/203" className="card-img-top" alt="..." height="200px"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="http://localhost:3000/" className="btn btn-outline-warning">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BootstrapMiniProj;