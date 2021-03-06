const React = require('react');
const { Component } = React;

class WordRelay extends React.Component{
    state = { 
        word: '김봉준',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length -1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
        }
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    input;

    onRefInput = (a) => {
        this.input = a;
    };
    
    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;