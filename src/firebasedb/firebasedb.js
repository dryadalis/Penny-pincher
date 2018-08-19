import { db } from '../firebase/firebase';
import 'firebase/firestore';

const addToDb = () => {
    db.collection('receits').add({
        name: 'Butter',
        price: 2,
        quantity: 1
    })
        .catch(E => {
            console.log(E)
        })
};

export default addToDb;
