import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import { DataContext } from '../../../DataContext';

const Playlist = () => {
    const { data, playlist, removePlaylist } = React.useContext(DataContext);

    if( !data ){
        return(
            <>
                <p style={{ textAlign: 'center'}}> Loading... </p>
            </>
        )
    }
    console.log("LIST: ", playlist);

    const list = data.filter( item => {
        // console.log("ITEM: ", item?.track?.name);
        return playlist.includes(item?.track?.name)
    })

    console.log('FILTERED: ', list);
    return (
        <>
            <h1>playlist</h1>
            <Container fluid={'true'}>
                <Row xs={'auto'} className='justify-content-center'>
                    {list.map( artist => (
                        <OverlayTrigger 
                            trigger='click'
                            overlay={
                                <audio controls name="media">
                                    <source src={artist?.track?.preview_url} type='audio/mpeg'/>
                                </audio>
                            }>
                            <Card style={{ width: '18rem' }} className='m-2 my-component' title={`Play ${artist?.track?.name} by ${artist?.track?.artists[0]?.name}`}> 
                                <Card.Img variant='top' src={artist?.track?.album?.images[0]?.url} />
                                <Card.Body>
                                    <Card.Title>
                                        {artist?.track?.name}
                                    </Card.Title>
                                    <Card.Text>
                                        {artist?.track?.artists[0]?.name}
                                    </Card.Text>
                                </Card.Body>
                                { !(playlist.includes(artist?.track?.name)) ? 
                                    <Button variant='primary' onClick={() => addPlaylist(artist?.track?.name)}>
                                        Add to Playlist
                                    </Button> : 
                                    <Button variant='primary' onClick={() => removePlaylist(artist?.track?.name)}>
                                        Remove from Playlist
                                    </Button>
                       
                                }
                                <i className='bi-play-btn text-end'></i>
                            </Card>
                        </OverlayTrigger>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Playlist; 