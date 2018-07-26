import React, { Component } from 'react';
import './batch.css';

class Batch extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Choose Batch</h4>
                            <p className="card-category"></p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-8">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Select Batch</label>
                                            <select class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect1" >
                                                <option selected hidden>Select From Below..</option>
                                                <option>jgj</option>
                                                <option>bhj</option>
                                                <option>jgj</option>
                                                <option>bj</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-6">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-primary pull-right"  >Submit</button>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Batch;