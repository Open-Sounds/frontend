import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from '../components/Navigation'
import { Search } from '../components/Search'
import { ArtistProfile } from '../components/ArtistProfile'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'


const Layout = ({ artistName, onChangeName, artist}) => {


    return (
        <div data-testid="app">
            <Navigation/>
            <Outlet/> 

            <Search artistName={artistName} onChangeName={onChangeName}/>
            <ArtistProfile artist={artist} />
            <Container> 
                <Row> 
                    <Col>AI Covers Section</Col>
                </Row>
            </Container>
        </div>
    )
}

export { Layout }