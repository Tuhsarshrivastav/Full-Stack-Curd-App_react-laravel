import React, { Component } from "react";
import axios from "axios";
export class AddContact extends Component {
    state = {
        fullName: "",
        email: "",
        phone: ""
    };
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    saveContact = async e => {
        e.preventDefault();
        const res = await axios.post("/contact", this.state);
        this.setState({ fullName: "", email: "", phone: "" });
        if (res.data.status === 200) {
            this.props.history.push("/");
        }
        console.log(res);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.saveContact}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            value={this.state.fullName}
                            onChange={this.handleInput}
                            placeholder="Enter FullName..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInput}
                            placeholder="Enter Email..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleInput}
                            placeholder="Enter PhoneNumber..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Add Contact"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;
