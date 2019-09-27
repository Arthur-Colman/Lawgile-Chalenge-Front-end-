import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Arthur Colman</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height: '250px'}} />
                        <p style={{ widht: '75%', margin: 'auto', paddingTop: '1rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Us</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (21) 99999-9999
                                    </ListItemContent>
                                </ListItem>
    

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (55) 9999-9999
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        randomemail@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                        MyFacebookAccount
                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
