function ErrorMessage({ message, retry }) {
  return (
    <div>
      <h2>Error</h2>

      <p>{message}</p>

      <button onClick={retry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;