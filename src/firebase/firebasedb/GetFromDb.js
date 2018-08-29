import React from 'react';
import { db } from '../firebase';
import './getFromDb.css';
import Context from '../firebasedb/validationContext/validationContext';


class GetFromDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: [],
        }
    }
    componentDidMount() {
        db.collection('receits')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                this.setState({data});
            })
            .catch((error) => this.setState({error}));
    }
    componentDidUpdate(prevProps){
        if(this.props.isInvalid !== prevProps.isInvalid && this.props.isInvalid) {
            db.collection('receits')
                .get()
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => doc.data());
                    this.setState({data});
                    this.props.toggle();
                })
                .catch((error) => this.setState({error}));
        }
    }

    render() {
        console.log(this.props);
        const {data, error} = this.state;
        return(
            <div>
                <ul className="getFromDb--list">
                    {data.map(item => (
                        <li key={item.id} className="getFromDb--item">{item.category} - {item.price}</li>
                    ))}
                </ul>

                {error && <p>{error.message}</p>}
            </div>

        )
    }
}
export default (props) =>
    <Context.Consumer>
        {
            (value) => (
                <GetFromDb {...props} {...value} />
            )
        }
    </Context.Consumer>