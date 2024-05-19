import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attempts_Number(result) {
    return result.filter((r) => r !== undefined).length;
  }
  
  export function earnPoints_Number(result, answers, point) {
    return result
      .map((elememt, i) => answers[i] === elememt)
      .filter((i) => i)
      .map((i) => point)
      .reduce((prev, curr) => prev + curr, 0);
  }
  
  
  
export function flagResult(totalpoints,earnPoints){
    return(totalpoints*50 /100)<earnPoints
}


export function CheckUserExit({children}){
const auth= useSelector(state=> state.result.userId)
 return auth ? children: <Navigate to={"/"} replace={true}></Navigate>
}