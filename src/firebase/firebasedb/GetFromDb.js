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
        const {data, error} = this.state;
        return(
            <div>
                <ul className="getFromDb--list">
                    {data.map((item, i) => (
                        <li key={i}
                            className="getFromDb--item">
                            {item.category} - {item.price}
                            {item.id && <button onClick={() =>
                                db.collection('receits')
                                    .doc(item.id)
                                    .delete()
                                    .then(this.props.toggle())
                            }>X</button>}
                            </li>
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