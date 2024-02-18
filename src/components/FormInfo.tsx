interface FormInterface {
  handleSubmit: (username: React.SyntheticEvent) => void;
}

function FormInfo({ handleSubmit }: FormInterface) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username : <input type="text" id="username" name="username" />
        </label>
      </div>
    </form>
  );
}

export default FormInfo;
