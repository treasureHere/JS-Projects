import React from 'react';
import Card from './Card';


const CardList = ({props}) =>{
let {searchField, robots} = props;

console.log({props})
    
 return (
        robots.map(robo =>{
        return(
        <Card key = {robo.id} name ={robo.name} email = {robo.email}/>
        )
    })
 )
}

export default CardList;