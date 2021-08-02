import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddContact from "./AddContact";
import Contacts from "./Contacts";
import Nav from "./Nav";
import "./app.css";
import EditContact from "./EditContact";
function Example() {
    return (
        <Router>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route exact path="/" component={Contacts} />
                            <Route
                                exact
                                path="/addContact"
                                component={AddContact}
                            />
                            <Route
                                exact
                                path="/edit/:id"
                                component={EditContact}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
