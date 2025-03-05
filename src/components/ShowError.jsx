import '../styles/error.css';

function ShowError({ msg }) {
  return (
    <div className="error">
      <p>{msg}</p>
    </div>
  );
}

export default ShowError;
