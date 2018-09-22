import React from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'

const SearchForm = () => (
  <Form inline>
    <FormGroup className="text-center" controlId="formInlineEmail">
      <FormControl type="search" placeholder="Digite o serviço..." />
    </FormGroup>
    <Button type="submit">
      Buscar
    </Button>
  </Form>
);

export default SearchForm
