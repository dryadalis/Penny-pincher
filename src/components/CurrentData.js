import React from 'react';

class CurrentData extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           currentData: '',
        }

    }

    componentDidMount() {
        this.getCurrentData();
    }
    getCurrentData = () => {
        let today = new Date();
        let currentData;

        currentData = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth()+1)).slice(-2) + '/' + today.getFullYear();
        this.setState({currentData})
    };

    render() {
        const {currentData} = this.state;
        return (
            <div style={{fontSize: '11px', marginTop: '2%', marginRight: '2%'}}>{currentData}</div>
        );
    }
}

export default CurrentData;