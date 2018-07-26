import React, { Component } from 'react';
import './assignment.css';
import Helper from '../Helper/helper';
import Header from '../Header/header';
import $ from 'jquery';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

class Assignment extends Component {
    
    notify1 = (msg) => {

        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    notify2 = (msg) => {

        toast(msg, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar'
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            batch_id: 0,
            file: null,
            loader: true,
            reset: true
        };
    }
    dropdown = (e) => {
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.setState({
            batch_id: selectedValue,
        });
    }

    fileSend = (e) => {
        this.setState
            (
            {
                file: e.target.files[0]
            }
            );
    }
    fetchPosts = () => {
        let res = Helper("batches", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });
        });

    }
    submit = () => {
        this.toggleLoader();
        let data = new FormData();
        data.append('batch_id', this.state.batch_id);
        data.append('file', this.state.file);

        let body = data

        let res = Header("assignments", 'POST', body);
        res.then((res) => {
            if(res.msg===1)
                {
                    this.notify2("Upload Successfull");
                }
                else
                {
                    this.notify("Upload Failed");
                }
            // console.log(res.msg);
            this.toggleLoader();
        });
        // this.setState({
        //     reset: false
        // })
        this.empty();
    }

    empty = () => {
        $("#fileInputId").val(null);
        $("#exampleFormControlSelect1").prop('selectedIndex', 0);
    }

    render() {
        // if(this.state.reset==false)
        // {
        //     this.empty();
        // }
        return (
            <div className="row">
            <Loader loader={this.state.loader}/>
                <ToastContainer autoClose={4000} />
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title"> Upload A File</h4>
                            <p className="card-category"></p>
                        </div>
                       <form>
                            <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <div className="form-group">
                                        <label >Select Batch</label>
                                        <div className="col-lg-6 col-md-6 col-sm-4"> 
                                        </div> 
                                        <select className="form-control ml-3" data-style="btn btn-link" id="exampleFormControlSelect1"
                                            accept="image/*,application/pdf " onChange={(e) => { this.dropdown(e) }} required >
                                            <option value="Select from Below.." hidden>Select from Below..</option>
                                            {
                                                this.state.posts.map((post, i) => {
                                                    return (
                                                        <option key={i} value={post.id}>{post.batch_name}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5 ml-1">
                                <div className=" col-md-8 col-lg-6 ">
                                <input type="file" name="pic" accept="image/*" id="fileInputId" onChange={(e) => this.fileSend(e)} accept="application/pdf, image/*" required />
                                    {/* <label className="bp3-file-input .modifier">
                                        <input type="file" id="fileInputId" onChange={(e) => this.fileSend(e)} accept="application/pdf, image/*" required />
                                        <span className="bp3-file-upload-input">Choose file...</span>
                                    </label> */}
                                </div>

                                <div className="col-md-4 col-lg-6">
                                    <button type="button" className="btn btn-primary pull-right" onClick={(e) => this.submit(e)}>UPLOAD</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    toggleLoader=()=>
    {
        this.setState({
            loader:!this.state.loader
        })
    }
    componentDidMount() {
        this.fetchPosts();
        this.toggleLoader();
    }
}

export default Assignment;