import Axios from "axios";
import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
    state = {
        contacts: [],
        loading: true
    };
    fetchContacts = async () => {
        const res = await Axios.get("/contact");
        if (res.data.status === 200) {
            this.setState({ contacts: res.data.contacts });
            this.setState({ loading: false });
        }
    };
    componentDidMount() {
        this.fetchContacts();
    }

    deleteContact = async id => {
        const res = await Axios.delete(`/contact/${id}`);
        if (res.data.status === 200) {
            this.fetchContacts();
        }
    };

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>;
        }
        return (
            <>
                {this.state.contacts.map(contact => (
                    <Contact
                        contact={contact}
                        key={contact.id}
                        deleteContact={this.deleteContact}
                    />
                ))}
            </>
        );
    }
}

export default Contacts;
