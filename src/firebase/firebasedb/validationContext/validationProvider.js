import  React from 'react';
import Context from './validationContext';

class ContextProvider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isInvalid: false,
        }
    }
    toggle = () => {
        this.setState(prevState => ({
                isInvalid: !prevState.isInvalid
            }));
    };


    render() {
        const {isInvalid} = this.state;
        return (
            <Context.Provider value={{
                isInvalid,
                toggle: this.toggle,
                convertToNumberAndSum: this.convertToNumberAndSum,
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }

}
export default ContextProvider;