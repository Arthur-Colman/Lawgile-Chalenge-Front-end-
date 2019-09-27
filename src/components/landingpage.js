import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="http://www.itouchapps.net/images/whats-that-logo/post-it.png"
                            alt="logo"
                            className="logo-img"
                            />
                        <div className="banner-text">
                            <h1>
                                Get Yours!
                            </h1>
                        <hr/>
                        <p>
                            At Home | At Work | At School | At Anywhere
                        </p>
                        <div className="social-links">
                            { /* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            { /* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                            { /* Facebook */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true" />
                            </a>
                            { /* YouTube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;