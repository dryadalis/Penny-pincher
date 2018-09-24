import React from 'react';
import {db, auth} from "../../firebase/firebase";
import Context from '../../firebase/firebasedb/validationContext/validationContext';


class SumAllExpenses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: [],
        }
    }
    componentDidMount() {
        db.collection(auth.currentUser.uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                this.convertToNumberAndSum(data);
            })

    }
    componentDidUpdate(prevProps){
        if(this.props.isInvalid !== prevProps.isInvalid && this.props.isInvalid) {
            db.collection(auth.currentUser.uid)
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
        const fixedSum = sum.toFixed(2);
        this.setState({sum: fixedSum});
    };


    render() {
        const { sum } = this.state;
        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <p style={{margin: '15px'}}>
                    Outflow:
                </p>
                <p style={{color: 'red', margin: '15px'}}>
                    {sum} ZŁ
                </p>
            </div>
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
