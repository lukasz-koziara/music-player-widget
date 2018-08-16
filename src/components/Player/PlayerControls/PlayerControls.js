import React, {Component} from 'react'
import './PlayerControls.css';

class PlayerControls extends Component {
    state = {
        isPaused: false
    };

    handleClick =() => {
        this.setState({
            isPaused: !this.state.isPaused
        })
    };
    render() {
        return (
            <div className='PlayerControls-Content'>
                <div className='PlayerControls-ControlContainer'>
                    <button className={"fas fa-share-alt PlayerControls-Share"}/>
                    <button className={"fas fa-step-backward PlayerControls-Prev Control"}/>
                    <button className={this.state.isPaused ? "fas fa-play PlayerControls-Play Control" : "fas fa-pause PlayerControls-Pause Control"}
                            onClick={ this.handleClick }/>
                    <button className={"fas fa-step-forward PlayerControls-Next Control"}/>
                    <button className={"fas fa-heart PlayerControls-Like"}/>
                </div>
            </div>
        )
    }
}
;

export default PlayerControls