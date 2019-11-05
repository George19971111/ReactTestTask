import React from 'react';
import './itemlist.scss';
import ItemItem from '../itemitem';


const ItemList = (props)=>{
    return(
        <React.Fragment>
           
            <table className="table_information_container">
                
            <thead>
                <tr>
                <th>Number</th>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Change</th>
                <th>&#8593;&#8595;</th>
                <th>%</th> 
                </tr>
            </thead>
         <tbody>
         { props.itemss.map((item,idx)=>{
              if(idx<10)
              {
                return <ItemItem todo={item} key={idx} index={idx}/>
               }
            
           })}</tbody> 
            </table>
          
        </React.Fragment>
    )
}
export default ItemList;