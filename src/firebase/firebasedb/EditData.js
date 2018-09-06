import React from 'react';
import {db} from "../firebase";

class EditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            newData: '',
        }
    }
        componentDidMount() {
            this.setState({loading: true});
            db.collection('receits')
                .get()
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => doc.data());
                    this.setState({data});

                })
                .catch((error) => this.setState({error}));
        }
    render(){
        const {data} = this.state;
        return(
            <div>
                {data.map((item) => console.log(item.id))}
            </div>
        )
    }
}

export default EditData;