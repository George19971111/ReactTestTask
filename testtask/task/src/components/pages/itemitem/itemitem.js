import React,{useEffect} from 'react';
import Win from '../HomePage/img/win.png';
import Loss from '../HomePage/img/loss.png'
const ItemItem = ({todo})=>{
    useEffect(()=>{
       if(todo.change>0){
        document.querySelector(`.itemtext_${todo.id+1}`).innerHTML =''
        document.querySelector(`.itemimg_${todo.id+1}`).innerHTML = ''
            let spanch = document.createElement('span')
            let imgg1 = document.createElement('img')
            imgg1.src = `${Win}`
            imgg1.width = 40;
            imgg1.height =40;
            spanch.innerHTML = `${todo.changePercent}%`
            spanch.style.color = '#77D57B';
            spanch.style.fontWeight = 'bold'
            document.querySelector(`.itemimg_${todo.id+1}`).appendChild(imgg1)
            document.querySelector(`.itemtext_${todo.id+1}`).appendChild(spanch)     
       }
       else{
        document.querySelector(`.itemtext_${todo.id+1}`).innerHTML =''
        document.querySelector(`.itemimg_${todo.id+1}`).innerHTML = ''
        let spanch = document.createElement('span')
        let imgg1 = document.createElement('img')
        imgg1.src = `${Loss}`
        imgg1.width = 40;
        imgg1.height =40;
        spanch.innerHTML = `${todo.changePercent}%`
        spanch.style.color = 'red';
        spanch.style.fontWeight = 'bold'
        document.querySelector(`.itemimg_${todo.id+1}`).appendChild(imgg1)
        document.querySelector(`.itemtext_${todo.id+1}`).appendChild(spanch)
       }
    })
    return(
        <React.Fragment>
         <tr>
            <td>{todo.id+1}</td>
            <td>{todo.date}</td>
            <td>{todo.open}</td>
            <td>{todo.close}</td>
            <td>{todo.change}</td>
            <td className={`itemimg_${todo.id+1}`}></td>
            <td className={`itemtext_${todo.id+1}`}></td>
        </tr>
        </React.Fragment>
    )
}
export default ItemItem;