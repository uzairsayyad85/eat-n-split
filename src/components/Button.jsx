/* eslint-disable react/prop-types */
export default function Button({ handleClick, children }) {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}
