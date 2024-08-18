import { useReducer } from "react";

const INCREMENT = "increment-count";
const DECREMENT = "decrement-count";
const SET_BIG_VALUE = "set-big-value";
const ADD_BIG_VALUE = "add-big-value";

const reducer = (state, action) => {
  // Creating new object once instead of in each case
  let newState = { ...state };
  switch (action.type) {
    case INCREMENT:
      newState.count++;
      break;
    case DECREMENT:
      newState.count--;
      break;
    case ADD_BIG_VALUE:
      newState.count += action.payload;
      break;
    case SET_BIG_VALUE:
      newState.bigValue = action.payload;
  }

  return newState;
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    bigValue: 0,
  });

  const incrementCount = () => dispatch({ type: INCREMENT });

  const decrementCount = () => dispatch({ type: DECREMENT });

  const changeCount = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_BIG_VALUE,
      payload: state.bigValue,
    });
  };

  const handleInputChange = (e) => {
    dispatch({
      type: SET_BIG_VALUE,
      payload: parseInt(e.target.value) || 0,
    });
  };

  return (
    <div className="counter">
      <p>Count is {state.count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>

      <form onSubmit={changeCount}>
        <label>Add a lot!</label>
        <input
          onChange={handleInputChange}
          type="number"
          value={state.bigValue || ""}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Counter;
