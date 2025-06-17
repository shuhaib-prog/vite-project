import { useState } from "react";

type Proptype = {
  setIsLoginned: (va: boolean) => void;
};

export default function Login({ setIsLoginned }: Proptype) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = () => {
    function validateEmail(email: string) {
      return email.includes('@')
    }

    if (validateEmail(email) && password == "1234") {
      alert("login success ");
      localStorage.setItem("loggedIn", "1");
      setIsLoginned(true);
    } else {
      alert("invaild email or password");
    }
    
  };

  return (
    <>
      <>
        <div>
          <label> Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label> password </label>
          <input
            type="text"
            value={password}
            onChange={(p) => setpassword(p.target.value)}
          />
        </div>
        <div>
          <button onClick={onsubmit}>submit</button>
        </div>
      </>
    </>
  );
}
