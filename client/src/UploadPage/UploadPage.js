import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './UploadPage.css';

class UploadPage extends Component {
    render() {
        return (
            <div>
                <div class="form-group col-md-4 col-md-offset-4">
                <form class="md-form" action="#">
                    <div class="file-field">
                        <div class="btn btn-primary btn-sm float-left">
                            <span>Choose files</span>
                            <input type="file" multiple/>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload one or more files"/>
                        </div>
                     </div>
                </form>
                </div>
            </div>
        );
    }
}
export default UploadPage;