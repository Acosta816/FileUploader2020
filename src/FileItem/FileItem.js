import React from 'react';
import './FileItem.css';
import { faFileImage, faFileVideo, faFileAlt, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemControls from '../ItemControls/ItemControls';


class FileItem extends React.Component {

    static defaultProps = {
        file: {}
    }


    render() {

        const icons = {
            "jpg": faFileImage,
            "mov": faFileVideo,
            "txt": faFileAlt,
            "mp3": faFileAudio
        }

        return (
            <div className="FileItem">
                

                <div className="FileItem__icon">
                    <div className="FileItem__circle">
                        <FontAwesomeIcon icon={icons[this.props.file.fileType] || faFileAlt } />
                    </div>
                </div>


                <div className="FileItem__content"> 

                    <div className="FileItem__heading">
                        <div className="FileItem__title">{this.props.file.name}</div>
                        <div className="FileItem__size">{this.props.file.size}</div>
                    </div>

                    <div className="FileItem__actions">
                        <div className="FileItem__status">
                            {this.props.file.status}
                        </div>
                        <ItemControls />
                    </div>
                    
                </div>



            </div>
        )
    }
}

export default FileItem;