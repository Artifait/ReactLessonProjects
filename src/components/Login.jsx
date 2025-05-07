export default function Login() {

  function handler(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    event.target.reset();
  }

  return (
    <form onSubmit={handler}>
      <label>
        User name:
        <input type="text" name="name" />
      </label>
      <label>
        User password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
