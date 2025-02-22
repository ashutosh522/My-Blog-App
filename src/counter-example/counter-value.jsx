import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  const {countValue}= state;
  //console.log(state);

  return (
    <>
      <p>Counter Value: {countValue}</p>
    </>
  )
}
export default CounterValue;