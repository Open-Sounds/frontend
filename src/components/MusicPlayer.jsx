import * as React from 'react';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MusicPlayer = ({ snippet }) => {

    return (
        <>
            <OverlayTrigger 
                trigger='click'
                overlay={
                    <Popover>
                         <video controls autoPlay name="media">
                            <source src={snippet?.track?.preview_url}/>
                        </video>
                    </Popover>
            }>
            </OverlayTrigger>
        </>
    )

}

export default MusicPlayer; 