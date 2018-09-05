import React from 'react';
import {db} from "../../firebase/firebase";
import Context from '../../firebase/firebasedb/validationContext/validationContext';


class SumAllExpenses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        db.collection('receits')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                this.convertToNumberAndSum(data);
            })

    }
    componentDidUpdate(prevProps){
        if(this.props.isInvalid !== prevProps.isInvalid && this.props.isInvalid) {
            db.collection('receits')
                .get()
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => doc.data());
                    this.convertToNumberAndSum(data);
                    this.props.toggle();
                })
                .catch((error) => this.setState({error}));
        }

    }

    convertToNumberAndSum = (data) => {
        const price = data.map((doc) => doc.price);
        const priceToNumber = price.map(parseFloat);
        const sum = priceToNumber.reduce((a, b) => a + b, 0);
        this.setState({data: sum});
    };


    render() {
        const { data } = this.state;
        return(
                <div>Outcomes: {data}</div>
        );
    }
}

export default (props) =>
    <Context.Consumer>
        {
            (value) => (
                <SumAllExpenses {...props} {...value} />
            )
        }
    </Context.Consumer>