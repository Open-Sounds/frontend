import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"

const Track = () => {

    return (
        <div>
            <Badge bg="secondary">Top Results</Badge>
            
            <Card style={{width: '18rem'}} className="mx-auto">
                <Card.Img 
                    width='286'
                    height='286'
                    //src={artist?.artists?.items[0]?.images[0]?.url}
                /> 
                <Card.Body>
                    <Card.Title>
                
                    </Card.Title>
                    <Card.Text as="div">

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export { Track }