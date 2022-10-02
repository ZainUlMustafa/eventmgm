function CreateController() {
    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="row my-2 mx-2 main">
                <div className="col-md-4 col-12">
                    <img src="https://i.imgur.com/cEmbD0i.jpg" height="auto" width="100%" />
                </div>
                <div className="col-md-8 col-12">
                    <h2 className="title pt-5 pb-3">New event</h2>
                    <form className="myform">
                        <div className="row rone">
                            <div className="form-group col-md-6 fone py-3">
                                <input type="text" className="form-control" placeholder="Event name" />
                            </div>
                            <div className="form-group col-md-6 ftwo py-3">
                                <input type="text" className="form-control" placeholder="Host name" />
                            </div>
                        </div>
                        <div className="row rtwo">
                            <div className="form-group col-md-6 fthree py-3">
                                <input type="date" className="form-control jk" placeholder="Start time" />
                            </div>
                            <div className="form-group col-md-6 ffour py-3">
                                <input type="date" className="form-control lm" placeholder="End time" />
                            </div>
                        </div>
                        <div className="row rthree">
                            <div className="form-group col-md-6 ffive py-3">
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="form-group col-md-6 fsix py-3">
                                {/* <input type="password" className="form-control" placeholder="Confirm Password" /> */}
                            </div>
                        </div>
                        <div className="">
                            <div className="form-group col fseven py-3">
                                <button type="submit" className="btn-dark-blue">
                                    <span className="btn-text">Create now</span>
                                </button>

                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateController;