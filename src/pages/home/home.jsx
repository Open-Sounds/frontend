import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import { DataContext } from '../../../DataContext';

const Home = () => {
    const { dataFiltered, playlist, addPlaylist, removePlaylist } = React.useContext(DataContext)

    // console.log("TEST: ", data);

// render the component only when data is available 
    if( !dataFiltered ){
        return(
            <>
                <p style={{ textAlign: 'center'}}> Loading... </p>
            </>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>
                Top 50 - Global
            </h1>
            <h3 style={{ textAlign: 'center' }}>
                Your daily update of the most played tracks right now - Global
            </h3>

            <Container fluid={'true'}>
                <Row xs={'auto'} className='justify-content-center'>
                    {dataFiltered.map( artist => (
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

export default Home; 