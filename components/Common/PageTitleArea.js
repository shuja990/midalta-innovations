import React, { Component } from 'react';

class PageTitleArea extends Component {
    render() {

        let { pageTitle, pageDescription } = this.props;

        return (
            <div className="page-title-area mb-4 mt-4">
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageDescription}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitleArea;