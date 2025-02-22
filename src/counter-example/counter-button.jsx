import { useDispatch } from "react-redux";
import { handleIncreaseCountAction, handleDecreaseCountAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();
  function handleIncrease() {
    dispatch(handleIncreaseCountAction({
      id: 1,
      name: 'Ashutosh Rathore'
    }))
  }

  function handleDecrease() {
    dispatch(handleDecreaseCountAction())
  }

  return (
    <>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
    </>
  )
}
export default CounterButton;