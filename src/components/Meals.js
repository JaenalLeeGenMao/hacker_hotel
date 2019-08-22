import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Meals = ({ meals }) => {
    return (
        <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            {meals.map((meal, mealIndex) => {
                console.log(meal.data);
                return (
                    <div key={"outer" + mealIndex}>
                        {meal.data.map((_, index) => {
                            return (
                                <ol id="list">
                                    <div key={"inner" + index}>
                                        <li className="morning">
                                            {meal.meta.title} Breakfast for
                                            insert_hacker_name
                                        </li>
                                        <li className="afternoon">
                                            {meal.meta.title} Lunch for
                                            insert_hacker_name
                                        </li>
                                        <li className="night">
                                            {meal.meta.title} Dinner for
                                            insert_hacker_name
                                        </li>
                                    </div>
                                </ol>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
export default Meals;
