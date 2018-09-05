import React from 'react';
import { db } from '../firebase';
import './getFromDb.css';
import Context from '../firebasedb/validationContext/validationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import HomePageWithoutData from './validationContext/NoDataComponent';
import AddModal from '../../components/HomePage/AddModal';
import {Loader} from "../../components/Loader/Loader";
import Overview from '../../components/HomePage/Overview';

class GetFromDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sum: [],
            loading: false,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        db.collection('receits')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                this.setState({data});
                this.setState({loading: false});

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
        const {data, error, loading, } = this.state;
        if (loading ) {
            return <Loader title={"Loading..."} className={"loader--getFromDb"}/>
        } else if(data.length <= 0) {
            return <HomePageWithoutData/>
        } else {
            return (
                <div>
                    <ul className="getFromDb--list">
                        <Overview />
                        {data.map((item, i) => (
                            <li key={i}
                                className="getFromDb--item__wrapper"
                            >
                                <div className="getFromDb--item">
                                    <div className="getFromDb--item__category"> {item.category} </div>
                                    <div className="getFromDb--item__price"> {item.price} zł</div>
                                    {item.id &&
                                    <a onClick={() =>
                                        db.collection('receits')
                                            .doc(item.id)
                                            .delete()
                                            .then(this.props.toggle())
                                    }><span title="Delete" aria-hidden="true">
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon__trash" />
                                    </span>
                                    </a>}
                                </div>
                                <div className="getFromDb--item__note">
                                    <FontAwesomeIcon icon={faPencilAlt}/> {item.note}
                                </div>
                            </li>

                        ))}
                    </ul>
                    <span className="getFromDb--addButton--wrapper" title="Add" >
                        <AddModal />
                    </span>
                    {error && <p>{error.message}</p>}
                </div>
            )
        }
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