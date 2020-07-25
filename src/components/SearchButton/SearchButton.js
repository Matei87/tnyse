import React from "react";
import './SearchButton.css';


class SearchButton extends React.Component {
    render() {
        return (
            <>
                <form
                    onSubmit={this.props.serciTerm}
                    className="form-inline">
                    <input
                        type="text"
                        id="input"
                        name="serciValue"
                        className="form-control"
                        placeholder="Search" />
                    <button
                        type="submit"
                        className="btn btn-outline-primary">
                        Submit
                    </button>
                </form>
            </>
        );
    }
}

export default SearchButton;