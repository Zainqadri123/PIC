

// export default Login;
import { useRef, useState, useEffect } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [uemail, setuemail] = useState();
  const [upassword, setupassword] = useState();
  const history = useNavigate();
  const useremail = localStorage.getItem("email");

  const handleSubmit = () => {
    console.log("cliked");
    console.log(uemail, upassword);

    axios
      .post("http://127.0.0.1:5000/login", {
        email: uemail,
        password: upassword,
      })
      .then((res) =>{
        if(res.data.data == 1)
        {
          alert("Error during Registeration!");
      
        }
        else{
          alert("Successfully Registered ");
          console.log('data',res.data.data)
          // history("../Login");
        }
      }
      )
      .catch((err) => console.warn(err));
    console.log(uemail, upassword);

    setuemail("");
    setupassword("");
    window.location.reload(false);
  };

  return (
    <>
      {useremail ? (
        <Link to="/Pest_detils" />
      ) : (
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "60px" }}
              >
                <h1>Subscribe</h1>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      name=""
                      className=" input_pass"
                      value={uemail}
                      onChange={(e) => setuemail(e.target.value)}
                      placeholder="email"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="upassword"
                      className=" input_pass"
                      value={upassword}
                      onChange={(e) => setupassword(e.target.value)}
                      placeholder="password"
                    />
                  </div>

                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      name="button"
                      className="btn login_btn"
                    >
                      Signup
                     
                    </button>
                 
                  </div>
                  <p>  Please login <Link to="/Login">Login</Link></p>
                </form>
              </div>

              {/* <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Have an account?{" "}
                  <Link to="/Login" className="ml-2">
                    Login
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
