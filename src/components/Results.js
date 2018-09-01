import React from 'react'
import {
    Grid,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap'

const Results = () => (
    <Grid>
        <h2 class="slogan" style={{display: 'flex',  justifyContent:'left'}}>Profissionais</h2>
        <ListGroup>
            <ListGroupItem href="#" active>Sidinei</ListGroupItem>
            <ListGroupItem href="#">Bruno</ListGroupItem>
            <ListGroupItem href="#" disabled>Jamiroquai</ListGroupItem>
        </ListGroup>
    </Grid>
)

export default Results