import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currentTimeActions from '../actions/currentTime';

class App extends Component {
    getCurrentTime() {
        this.props.actions.getCurrentTime();
    }

    render() {
        const { status, time } = this.props.currentTime;
        return (
            <div>
                {status ? (
                    <>
                        <div>currentTime: {time} </div>
                        <div>status: {status}</div>
                    </>
                ) : (
                    <> ↓ press button ↓ </>
                )}
                <div>
                    <button onClick={this.getCurrentTime.bind(this)}>
                        GetCurrentTime
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentTime: state.currentTime,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(currentTimeActions, dispatch),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
