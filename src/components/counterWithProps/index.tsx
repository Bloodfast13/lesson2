import React from 'react'

interface OwnProps {
    counter: number
}

interface State {
    valueOfInput: string
}

class CounterWithProps extends React.Component<OwnProps, State> {
    state = {
        valueOfInput: ''
    }

    render() {
    return (
        <>
            {/* <p>{this.props.counter} {this.state.value}</p>
            <button onClick={() => {
                this.setState({value: this.state.value + 1})
            }}>Click me</button> */}
            <input type="text" value={this.state.valueOfInput} onChange={e => this.setState({ valueOfInput: e.target.value})}/>
        </>
    )
    }
}

// const CounterWithProps: React.FC<OwnProps> = (props) => {
//     return <p>{props.counter}</p>
// }

export default CounterWithProps