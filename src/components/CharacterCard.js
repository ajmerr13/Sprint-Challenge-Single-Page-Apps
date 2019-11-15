import React from "react";
import { Card, CardSubtitle, CardBody, CardTitle, CardImg} from "reactstrap";

export default function CharacterCard(props) {
return (
  
    <Card>
        <CardTitle>Name: {props.character.name}</CardTitle>
        <CardImg src={props.character.image} />
        <CardBody>
        <CardSubtitle>ID: {props.character.id}</CardSubtitle>
        <CardSubtitle>Gender: {props.character.gender}</CardSubtitle>
        <CardSubtitle>Species: {props.character.species}</CardSubtitle>
        </CardBody>
      </Card>
  
)
}