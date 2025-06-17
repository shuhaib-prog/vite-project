export default function Home() {
  function loggout() {
    localStorage.removeItem("loggedIn");
  }
  return (
    <div>
      <h1>login success</h1>
      <div>
        <button onClick={loggout}>Loggout </button>
      </div>
    </div>
  );
}

type Proptype = {
  setIsLoginned: (va: boolean) => void;
};
