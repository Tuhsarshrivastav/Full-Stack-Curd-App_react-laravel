import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Contact extends Component {
    delContact = id => {
        this.props.deleteContact(id);
    };
    render() {
        const { contact } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="image">{contact.fullName[0]}</span>
                        </div>
                        <div className="col-md-2 mb-2">{contact.fullName}</div>
                        <div className="col-md-2 mb-2">{contact.email}</div>
                        <div className="col-md-2 mb-2">{contact.phone}</div>
                        <div className="col-md-2 mb-2">
                            <Link
                                to={`/edit/${contact.id}`}
                                className="btn btn-warning mb-2"
                            >
                                Edit
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <button
                                onClick={() => this.delContact(contact.id)}
                                className="btn btn-danger mb-2"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
