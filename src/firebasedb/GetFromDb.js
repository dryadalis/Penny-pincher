import React from 'react';
import 'firebase/firestore';
import { db } from '../firebase/firebase';

 class GetFromDb extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             data: []
         };
     }

     componentDidMount() {
         db.collection('receits').get().then((querySnapShot) => {
             const data = querySnapShot.docs.map((data) =>{
                 return data.data();
             });
             this.setState({data})
         } );
     }

     render() {
         const {data} = this.state;
         return (
             <ul style={{display: 'flex', flexDirection: 'column'}}>
                 {data.map((item) => (
                     <li>{item.category} - {item.price}</li>
                     ))}
             </ul>
         )
     }
 }
export default GetFromDb;