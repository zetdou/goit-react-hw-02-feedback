import { Component } from "react";
import PropTypes from "prop-types";

export default class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div>
                {options.map((option) => (
                    <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
                ))}
            </div>
        );
    };
};