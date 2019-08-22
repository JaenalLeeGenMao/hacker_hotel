import React, { Component } from "react";
import { PropTypes } from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Bookings extends Component {
    render() {
        return (
            <div className="row">
                <TextField
                    onChange={e => this.props.handleGuestInfo(e)}
                    className="col-md-6"
                    multiline
                    rows="4"
                    placeholder="Enter the hacker list (one hacker per line)"
                />
                <TextField
                    onChange={e => this.props.handleDateInfo(e)}
                    className="col-md-6"
                    multiline
                    rows="4"
                    placeholder="Enter the date range for each hacker's stay (one range per line)"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className="block-center"
                    onClick={this.props.handleSubmit}
                >
                    Get Meals Schedule
                </Button>
            </div>
        );
    }
}

export default Bookings;
