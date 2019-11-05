import React from 'react';
import {MyConsumer} from '../context';
const Hoc = () => (Wrapper) => {
    return(props)=> {
        return(
            <MyConsumer>
                {
                    (mainServise)=>{
                        return (<Wrapper {...props} mainServise={mainServise} />)
                    }
                }
            </MyConsumer>
        )
    }
}
export default Hoc;