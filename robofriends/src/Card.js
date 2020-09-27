import React from 'react';

const Card = ({name, email}) =>{           
                return(
                    <div style = {{height : 300, width : 300}}>
                    <img src = {'https://robohash.org/'+name }/>
                     <div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div> 
                    </div>
                );
}
export default Card;