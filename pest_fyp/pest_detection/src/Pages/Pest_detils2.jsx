import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserRating from "../Components/UserRating";

const Pest_detils = () => {
  const [file, setfile] = useState(null);
  const [Class, setClass] = useState("");
  const [detail, setdetail] = useState("");
  const [Loadmore, setLoadmore] = useState(false);

  const useremail = localStorage.getItem("email");
  console.log(useremail);

  const handleChange = (e) => {
    console.log(e.target.files);
    setfile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Package uploaded successfully ");
    const formData = new FormData();

    formData.append("file", file);

    axios
      .post("http://127.0.0.1:5000/upload/file", formData)
      .then((res) => {
        
        if(res.data.data==1)
        {
          
          alert("File Format is not supported!");
        }else{
        setClass(res.data.data);
        localStorage.setItem('current_class',res.data.data.PEST_NAME)
        console.log(res);
        setdetail(res.data);
        }
      })

      .catch((err) => console.warn(err));
    console.log(file);
  };

  const extraContent = () => {
    <div>
      <p className="extra-content">{detail.dls}</p>
    </div>;
  };
  const linkName = Loadmore ? "Less Details>" : "More Details>";
  return (
    <>
      <div className="greennature-page-title-wrapper header-style-5-title-wrapper">
        <div className="greennature-page-title-overlay"></div>
        <div className="greennature-page-title-container container">
          <h1 className="greennature-page-title">PEST IDENTIFICTION </h1>
          {/* <span className="greennature-page-caption">
            CNN AND PROTECTION HERBICIDES
          </span> */}
        </div>
      </div>

      {/* <!-- is search --> */}
      <div className="content-wrapper" style={{ marginBottom: "20px" }}>
        <div className="greennature-content">
          <div className="with-sidebar-wrapper">
            <div className="with-sidebar-container container">
              <div className="">
                <div className="greennature-item-start-content sidebar-right-item">
                  <div
                    className="gdl-search-form"
                    // style={{
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   justifyContent: "center",
                    // }}
                  >
                    <div className="blog-content-wrapper">
                      <header className="post-header">
                        <h3 className="greennature-blog-title">
                          Choose an Image for Classification(درجہ بندی کے لیے تصویری فائل کا انتخاب کریں۔)
                        </h3>
                        <div className="clear"></div>
                      </header>
                    </div>
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "80px 50px",
                      }}
                    >
                      <input
                        type="file"
                        onChange={handleChange}
                        placeholder="choose file"
                        style={{
                          width: "250px",
                          height: "50px",
                          boxSizing: "border-box",
                          // border: "2px solid red",
                          borderRadius: "4px",
                          color: "white",
                          borderRadius: "50px",
                          backgroundColor: " #475a53",
                          padding: "12px 20px",
                          margin: "8px 0",
                        }}
                      />
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        style={{
                          backgroundColor: "#04AA6D",
                          border: "none",
                          borderRadius: "50px",
                          color: "white",
                          padding: "16px 32px",
                          textDecoration: "none",
                          margin: "10px 20px",
                          cursor: "pointer",
                        }}
                      >
                        submit/جمع کرائیں
                      </button>
                    </form>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                     
                      {!useremail && Loadmore && (
                        <div>
                         <h4>CLASS:{Class.PEST_NAME}</h4> 
                          <h3>For more details please Signup(مزید تفصیلات کے لیے برائے مہربانی سائن اپ کریں۔)</h3>
                          <button
                            type="submit"
                            style={{
                              backgroundColor: "#2f3030",
                              border: "none",
                              borderRadius: "50px",
                              color: "white",
                              padding: "16px 32px",
                              textDecoration: "none",
                              margin: "10px 20px",
                              cursor: "pointer",
                            }}
                          >
                            <Link to="/signup">signup</Link>
                          </button>
                        </div>
                      )}
                    
                      {detail && (
                        <div>
                          <button
                            className="read-more-link"
                            style={{
                              fontSize:"2px",
                              backgroundColor: "rgb(4, 170, 109)",
                              border: "none",
                              borderRadius: "20px",
                              color: "white",
                              padding: "2px 4px",
                              textDecoration: "none",
                              margin: "4px 2px",
                              cursor: "pointer",
                              fontcolor:"white!importent",
                            }}
                            onClick={() => {
                              setLoadmore(!Loadmore);
                              
                            }}
                          >
                            <h2>{linkName}</h2>
                           
                          </button>
                          {Loadmore && useremail && <div style={{ border:"1px dotted blue" }}>


                            <div>
                          <h5 > PEST CLASS :                { Class.PEST_NAME }</h5>
                          <hr></hr>
                           </div>
                           <h5>SCIENTFIC_NAME:</h5> 
                           
                            {Class.SCIENTFIC_NAME}
                            <hr></hr>
                        
                           <h5> PEST_ATTACK_DETAILS:</h5>
                            {Class.PEST_ATTACK_DETAILS}
                            <hr></hr>
                           <h5>RECOMMENDED_PESTICIDES:</h5> 
                            {Class.RECOMMENDED_PESTICIDES}
                          </div>}
                        </div>
                      )}
                    </div>
                    {useremail && detail && <UserRating />}

                    {/* {!useremail ? (
                      <div style={{ marginTop: "50px" }}>
                        <h3 className="greennature-blog-title">
                          Please Signup before choosing the file
                        </h3>
                        <button
                          style={{
                            backgroundColor: "#04AA6D",
                            border: "none",
                            borderRadius: "50px",
                            color: "white",
                            padding: "16px 32px",
                            textDecoration: "none",
                            margin: "4px 2px",
                            cursor: "pointer",
                          }}
                        >
                          <Link to="/Signup">Signup</Link>
                        </button>
                      </div>
                    ) : (
                      <p></p>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      {/* <!-- content wrapper --> */}
    </>
  );
};

export default Pest_detils;