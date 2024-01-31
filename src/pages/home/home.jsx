import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tooltip from 'react-bootstrap/Tooltip';
import { DataContext } from '../../../DataContext';

const Home = () => {
    const { data } = React.useContext(DataContext)

// render the component only when data is available 
    if( !data ){
        return(
            <>
                <p style={{ textAlign: 'center'}}> Loading... </p>
            </>
        )
    }

    console.log("CONTEXT TEST: ", data);
    const topArtists = data?.items
    console.log("TEST: ", topArtists);
    console.log("EXTERNAL: ", topArtists[0]?.track?.preview_url)
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
                    {topArtists.map( artist => (
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