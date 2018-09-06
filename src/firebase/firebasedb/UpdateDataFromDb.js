import React from 'react';
import {db} from "../firebase";
import Context from '../firebasedb/validationContext/validationContext';

class UpdateDataFromDb extends React.Component {

    UpDate = () => {
        const sfDocRef = db.collection("receits").doc('2reFE13gP5qThO5Xugxq');

        return db.runTransaction((transaction => {
            return transaction.get(sfDocRef).then((sfDoc) => {
                if(!sfDoc.exists) {
                    throw "Document does not exist!";
                }

                transaction.update(sfDocRef, {category: 'Chlebor'});
            });
        }))
            .then(() => this.props.toggle())
            .catch((error) => console.log(error));
};

    render() {
        return(
            <button onClick={this.UpDate}>Edit</button>
        );
    }

}
 export default (props) =>
    <Context.Consumer>
        {
            (value) => (
                <UpdateDataFromDb {...props} {...value} />
            )
        }
    </Context.Consumer>