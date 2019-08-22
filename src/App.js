import React, { Component } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

class App extends Component {
    state = {
        names: "",
        dates: "",
        data: {},
        error: false
    };

    handleGuestInfo = e => {
        const { value } = e.target;
        if (value) {
            this.setState({
                names: value
            });
        }
    };

    handleDateInfo = e => {
        const { id, value } = e.target;
        if (value) {
            this.setState({
                dates: value
            });
        }
    };

    handleSubmit = () => {
        const { names, dates, data } = this.state;
        console.log(this.state);
        let listOfNames = names.split("\n");
        let listOfDates = dates.split("\n");

        if (
            listOfDates.length > 0 &&
            listOfDates.length === listOfNames.length
        ) {
            listOfDates.map((date, index) => {
                const [startDate, endDate] = date.split(" to ");

                const differenceInDays = this.handleDateDifference(
                    startDate,
                    endDate
                );

                data[listOfNames[index]] = differenceInDays;
            });
        }
        this.setState({
            error: listOfNames.length !== listOfDates.length ? true : false,
            data
        });
    };

    handleDateDifference = (startDate, endDate) => {
        let one_day = 1000 * 60 * 60 * 24;

        // Calculate the difference in milliseconds
        let difference_ms =
            new Date(endDate).getTime() - new Date(startDate).getTime();

        return Math.round(difference_ms / one_day);
    };

    render() {
        const { data } = this.state,
            meals = [];

        Object.keys(data).forEach(key => {
            meals.push({
                meta: {
                    title: key
                },
                data: new Array(data[key]).fill("")
            });
        });
        return (
            <div className="container-fluid">
                <center>
                    <h2>Hacker Hostel</h2>
                </center>
                <div className="container">
                    <Bookings
                        handleGuestInfo={this.handleGuestInfo}
                        handleDateInfo={this.handleDateInfo}
                        handleSubmit={this.handleSubmit}
                    />
                    {this.state.error && <Error />}
                    {meals.length > 0 && <Meals meals={meals} />}
                </div>
            </div>
        );
    }
}

export default App;
