import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

import '../styles.css'

const ArtistProfile = ({ artist }) => {
     

    return (
        <div>

            <Badge bg="secondary">Top Results</Badge>
            
            <div class="container">
                <Card style={{width: '18rem'}} className="mx-auto">
                    <Card.Img 
                        width='286'
                        height='286'
                        src={artist?.artists?.items[0]?.images[0]?.url}
                    /> 
                    <Card.Body>
                        <Card.Title>
                            {artist?.artists?.items[0]?.name}
                        </Card.Title>
                        <Card.Text as="div">
                            <b>{artist?.artists?.items[0]?.type}</b>
                            <br/>
                            Genres:
                                <ul>
                                    {artist?.artists?.items[0]?.genres.map(genre => <li>{genre}</li>)}
                                </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{width: '32rem'}} className="mx-auto">

                    {artist?.tracks?.items.map(artist => 
                        <Card.Body style={{ display:'flex', justifyContent: 'space-between'}}>
                            <Card.Img 
                                width='86'
                                height='86'
                                variant='left'
                                src={artist?.album?.images[0]?.url}
                            />
                            <div>
                                <Card.Title>
                                    {artist.name}
                                </Card.Title>
                                <Card.Text as="div">
                                    {artist?.album?.artists[0]?.name}
                                </Card.Text>
                            </div>  
                            <Card.Text>
                            <br/>
                                {`${new Date(artist?.duration_ms).getMinutes()}:${new Date(artist?.duration_ms).getSeconds()}`}
                            </Card.Text>

                            <DropdownButton title="..." id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">Add to Playlist</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    )}
                </Card>

                <Card style={{height: '18rem'}}>
                    <h1>Hello world</h1>
                </Card>
            </div>
        </div>
        
    )
}

export { ArtistProfile }