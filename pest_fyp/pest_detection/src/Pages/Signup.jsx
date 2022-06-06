import { useRef, useState, useEffect } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Signup = () => {
  const [uemail, setuemail] = useState();
  const [username, setusername] = useState();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [upassword, setupassword] = useState();
  const [rpassword, setrpassword] = useState();

  const history = useNavigate();
  const useremail = localStorage.getItem("email");

  const handleSubmit = () => {
    console.log("cliked");
    console.log(uemail, upassword);
    const letters =new RegExp("/^[A-Za-z]+$/");
    if(letters.test(username)){
    if(rpassword==upassword){
      
      const regx=new RegExp("[a-zA-Z+0-9_:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
      const regpass=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
      if (regx.test(uemail) ){
        if(regpass.test(rpassword)){
    axios
      .post("http://127.0.0.1:5000/signup", {
        name:username,  
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
    }
    else{
      alert("Password format is not valid!")
    }
    }else{
      alert("Email format is not valid!")
    }

    }else{
        alert("Password Does not Matched!");
      }
    }else{
      alert("Named should be only alphabats!");
    }
    console.log(uemail, upassword);

    setuemail("");
    setupassword("");
    setrpassword("");
    setusername("");
    // window.location.reload(false);
  };

  const handleSubmitlogin = () => {
    console.log("cliked");
    console.log(email, password);
   const regx=new RegExp("[a-zA-Z+0-9_:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
   const regpass=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
   
   console.log(regx.test(email));
   console.log(regpass.test(password));
   if (regx.test(email)){
     if(regpass.test(password)){
    axios
      .post("http://127.0.0.1:5000/login", {
       
        email: email,
        password: password,
      })
      .then((res) =>{
        if(res.data.data == 1)
        {
          alert("Error during Login!");
        }
        else{
          alert("LogIn");
          console.log('data',res.data.data)
          localStorage.setItem('email',res.data.data)
          history("../Pest_detils");
          window.location.reload(true);
        }
      }
      )
      .catch((err) => console.warn(err));
    }
    else{
      alert("Password format is not valid!")
    }
    }else{
      alert("Email format is not valid!")
    }
    
    
    console.log(email, password);

    setuemail("");
    setupassword("");
    setrpassword("");
    setusername("");
    
  };
  return (
    <>
      {useremail ? (
        <Link to="/Pest_detils" />
      ) : (
        <div className="container h-60">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center ">
            <div className="user_card">
              <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "10px" }}
              >
                <h1>SignUp</h1>
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
                      type="text"
                      name=""
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      // required
                      className=" input_pass"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      placeholder="Name"
                    />
                  </div>

                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      name=""
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      className=" input_pass"
                      value={upassword}
                      onChange={(e) => setupassword(e.target.value)}
                      placeholder="password"
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
                      name="rpassword"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      className=" input_pass"
                      value={rpassword}
                      onChange={(e) => setrpassword(e.target.value)}
                      placeholder="Repeat password"
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
            <div className="col-lg-6 col-md-6 col-sm-12">

            <div className="d-flex justify-content-center">
            <div className="user_card">
              <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "-50px" }}
              >
                <h1>LogIn</h1>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form>
                  <div className="input-group ">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      name=""
                      className=" input_pass"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="email"
                    />
                  </div>
                  <br></br>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className=" input_pass"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="password"
                    />
                  </div>

                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button
                      onClick={handleSubmitlogin}
                      type="button"
                      name="button"
                      className="btn login_btn"
                    >
                      LogIn
                    </button>
                 
                  </div>
                 
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
           
          </div>
    
     
        
        </div>
       
      )}
    </>
  );
};

export default Signup;
