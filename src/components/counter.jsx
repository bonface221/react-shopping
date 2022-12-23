import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div className="m-1 row">
				<div className="col-1 me-0 text-end">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-primary btn-sm me-2"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						disabled={this.isDisabled()}
						className="btn btn-secondary btn-sm me-2"
					>
						-
					</button>
					<button
						className="btn btn-danger btn-sm"
						onClick={() => this.props.onDelete(this.props.counter.id)}
					>
						*
					</button>
				</div>
				<div className="icons">
					<i className="fa fa-heart" aria-hidden="true"></i>
				</div>
			</div>
		);
	}

	isDisabled = () => {
		return !this.props.counter.value ? true : false;
	};
	formatCount = () => {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};

	getBadgeClasses = () => {
		let classes = "badge m-2 bg-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};
}

export default Counter;
