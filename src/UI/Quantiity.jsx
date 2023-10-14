import Button from "./Button";
import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = ({count, setCount}) => {
  
  const increase = () =>{
    if(count < 5){
      setCount(prev => prev + 1)
      }

  }
  const decrease = () =>{
    if(count > 1){
      setCount(prev => prev - 1)
      }
    
  }
    return ( 
        <div className="quantity">
                  <Button text={<FaMinus />} onClick={decrease}/>
                  <div className="count">
                    {count}
                  </div>
                  <Button text={<FaPlus />} onClick={increase} />
                </div>
     );
}
 
export default Quantity;