import React from 'react';
import './ItemControls.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTrashAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';


class ItemControls extends React.Component {

    render() {

        return (
            <div className="ItemControls">
                <div className="ItemControls__btn"><FontAwesomeIcon icon={faRedoAlt}/></div>
                <div className="ItemControls__btn"><FontAwesomeIcon icon={faTrashAlt}/></div>
                <div className="ItemControls__btn"><FontAwesomeIcon icon={faCloudDownloadAlt}/></div>
            </div>   
        )
    }
}

export default ItemControls;