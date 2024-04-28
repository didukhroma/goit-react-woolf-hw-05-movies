const Form = ({ cbOnSubmit, cbOnChange, query }) => {
  return (
    <form onSubmit={cbOnSubmit}>
      <label>
        <input type="text" onChange={cbOnChange} value={query} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
