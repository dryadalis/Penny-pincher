import React from 'react';
import { db } from '../firebase';

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
                querySnapshot.docs.map((doc) => {
                    doc.data();
                })
            })
            .catch((error) => this.setState({error}));
    }

    render() {
        const {data, error} = this.state;
        return(
            <div>
                <ul>
                    {data.map(item => (
                        <li>{item.category} - {item.price}</li>
                    ))}
                </ul>

                {error && <p>{error.message}</p>}
            </div>

        )
    }
}
export default GetFromDb;