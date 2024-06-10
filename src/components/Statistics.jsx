import { Component } from "react";
import PropTypes from "prop-types";

export default class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
        );
    }
}