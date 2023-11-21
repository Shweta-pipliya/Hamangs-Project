import React from "react";
import "./First.css";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlineArrowDropDown } from "react-icons/md";
import imgupload from "../images/Frame 1547753376.png";
import icon1 from "../images/Frame 1171275857.svg";
import icon2 from "../images/Frame 1171275858.svg";
import icon3 from "../images/000.svg";
import icon4 from "../images/Frame 1171275859.svg";
import icon5 from "../images/Frame 111.svg";
import icon6 from "../images/Frame 112.svg";
import icon7 from "../images/11.svg";
import icon8 from "../images/12.svg";
import icon9 from "../images/13.svg";
import icon10 from "../images/14.svg";
import { FaCheckCircle } from "react-icons/fa";
// import "../component/Second";
function First() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [finalResponse, setFinalResponse] = React.useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      uploadImage(event.target.files[0]);
    }
  };

  const getResult = async (id, type) => {
    const response = await axios.get(
      `https://lens-6ewaiah5tq-ue.a.run.app/v1/image/${id}/result/${type}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Basic TGVuc0FQSXM6NDNsdUZ4RU82ZGJ0cVZIQXhaNzE=",
        },
      }
    );

    console.log(response);
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);

    const response = await axios.post(
      "https://lens-6ewaiah5tq-ue.a.run.app/v1/image/?cache=true",

      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Basic TGVuc0FQSXM6NDNsdUZ4RU82ZGJ0cVZIQXhaNzE=",
        },
      }
    );

    console.log(response);
    const status = await getStatus(response.data.id);

    console.log(status);
  };

  const getStatus = async (id) => {
    const interval = setInterval(async () => {
      const response = await axios.get(
        `https://lens-6ewaiah5tq-ue.a.run.app/v1/image/${id}/status`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Basic TGVuc0FQSXM6NDNsdUZ4RU82ZGJ0cVZIQXhaNzE=",
          },
        }
      );
      if (
        response.data.is_complete == undefined ||
        response.data.is_complete !== false
      ) {
        setFinalResponse(response.data);
        console.log(response);
        //  for (let i = 0; i < Object.keys(response.data).length; i++) {
        //   const element = Object.keys(response.data)[i];
        //   console.log(await getResult(id, element));

        //  }

        clearInterval(interval);

        for (let i = 0; i < Object.keys(response.data).length; i++) {
          const element = Object.keys(response.data)[i];
          await getResult(id, element);
        }
      }
      console.log(response);
    }, 5000);
  };

  const [Image, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };

  const [show, setShow] = useState(false);
  const ShowNow = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleDropdown = () => {
      setIsActive(!isActive);
    };
  };

  const [showtab, setshowtab] = useState(1);

  const handeltab = (e) => {
    console.log("Clicked tab:", e);
    setshowtab(e);
  };
  return (
    <>
      <div className="desktop-5">
        <div className="desktop-5-inner">
          <div className="group-parent">
            <div className="rectangle-parent">
              {/* <div className="group-child">  <img className='img'  src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg " />  </div> */}
              <div className="group-child" id="imageContainer">
                {Image ? (
                  <img
                    className="change-img"
                    id="uploadedImage"
                    src={URL.createObjectURL(Image)}
                    alt="Uploaded"
                  />
                ) : (
                  <img
                    className="change-img"
                    id="uploadedImage"
                    src={imgupload}
                    alt="Uploaded"
                  />
                )}
              </div>

              <div className="rectangle-group">
                <div className="group-item">
                  <div className="upload-image">
                    <input
                      className="input"
                      onChange={handleImageChange}
                      type="file"
                      name="myImage"
                      id="uploadbtn"
                      // onChange={(event) => {
                      //   console.log(event.target.files[0]);
                      //   onImageChange(event);
                      //   setSelectedImage(event.target.files[0]);
                      // }}
                    />
                    <label for="uploadbtn">Upload Image</label>
                  </div>
                </div>
              </div>

              <div className="group-div">
                {/* <div className="rectangle-div" /> */}
                <div class="rectangle-parent1">
                  <div class="column">
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                  </div>
                  <div class="column">
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                  </div>
                  <div class="column">
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                  </div>
                  <div class="column">
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                  </div>
                </div>
              </div>
              <div className="rectangle-container">
                <p1 className="OR">OR</p1>

                <div className="image-set-dropdown" onClick={ShowNow}>
                  Image Set Dropdown <MdOutlineArrowDropDown />
                </div>
                {show && (
                  <ul className="drop-option">
                    <li className="option">Option 1</li>
                    <li className="option">Option 2</li>
                    <li className="option">Option 3</li>
                    <li className="option">Option 4</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="sku-parent">
            <div className="sku">Fun Moment at Home</div>
          </div>
          <div className="frame-parent">
            <div class="row">
              <div class="column">
                <div class="card0">
                  <img className="icon-card" src={icon6} />
                  <p>who</p>
                  <p>_</p>
                </div>
              </div>

              <div class="column">
                <div class="card0">
                  <img className="icon-card" src={icon5} />
                  <p>What</p>
                  <p>_</p>
                </div>
              </div>

              <div class="column">
                <div class="card0">
                  <img className="icon-card" src={icon4} />
                  <p>Where</p>
                  <p>_</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="card0 ">
                  <img className="icon-card" src={icon2} />
                  <p>When</p>
                  <p>_</p>
                </div>
              </div>

              <div class="column">
                <div class="card0">
                  <img className="icon-card" src={icon1} />
                  <p>Why</p>
                  <p>_</p>
                </div>
              </div>

              <div class="column">
                <div class="card0">
                  <img className="icon-card" src={icon3} />
                  <p>How</p>
                  <p>_</p>
                </div>
              </div>
            </div>
            {/* <div className="rectangle-parent2">
              <div className="group-child7" />

              <div className="sku-group">
                <div class="vl"></div>
                <div className="sku1">
                  Who <hr />
                </div>

                <div className="sku2">
                  Mostly males but strong presence of females. Largely dominated
                  by youth. Typically consumed with very close friends.
                  <hr />
                </div>
              </div>
              <div className="sku-container">
                <div className="sku1">
                  What <hr />
                </div>
                <div className="sku2">
                  Unchallenging, easy to prepare drinks with a refreshing taste.
                  Beer, RTDs and flavoured Vodka feature heavily
                  <hr />
                </div>
              </div>
              <div className="frame-div">
                <div className="sku1">
                  Where <hr />
                </div>
                <div className="sku2">
                  Unchallenging, easy to prepare drinks with a refreshing taste.
                  Beer, RTDs and flavoured Vodka feature heavily
                  <hr />
                </div>
              </div>
              <div className="sku-parent1">
                <div className="sku1">
                  When <hr />
                </div>
                <div className="sku2">
                  Unchallenging, easy to prepare drinks with a refreshing taste.
                  Beer, RTDs and flavoured Vodka feature heavily
                  <hr />
                </div>
              </div>
              <div className="sku-parent2">
                <div className="sku1">
                  How <hr />
                </div>
                <div className="sku2">
                  Unchallenging, easy to prepare drinks with a refreshing taste.
                  Beer, RTDs and flavoured Vodka feature heavily
                  <hr />
                </div>
              </div>
              <div className="sku-parent3">
                <div className="sku1">
                  With <hr />
                </div>
                <div className="sku2">
                  Unchallenging, easy to prepare drinks with a refreshing taste.
                  Beer, RTDs and flavoured Vodka feature heavily
                  <hr />
                </div>
              </div>
             
            </div> */}
          </div>
        </div>
        <div className="desktop-5-child">
          <div class="row">
            <div class="column">
              <div class="card1">
                <h3>Emotions</h3>
                <div class="grid-container">
                  <div class="grid-item1">_</div>
                  <div class="grid-item2">_</div>
                  <div class="grid-item3">_</div>
                </div>
                <div class="grid-container">
                  <div class="grid-item4">_</div>
                  <div class="grid-item5">_</div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card2">
                <h3>Motivation</h3>
                <div class="grid-container">
                  <div class="grid-item6">_</div>
                  <div class="grid-item6">_</div>
                  <div class="grid-item6">_</div>
                </div>
                <div class="grid-container">
                  <div class="grid-item6">_</div>
                  <div class="grid-item6">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-relevance-parent">
          <div className="brand">
            <h2>Brand Insights</h2>

            <div className="Brand-section">
              {/* <ul className="Brand-ul">
                <li className="Brand-Relevance">
                  <button
                    type="button"
                    className={showtab === 1 ? "btn btn-light active" : "btn btn-light"}
                    onClick={() => handeltab(1)}
                  >
                    Brand Relevance
                  </button>
                </li>
                <li className="Brand-Marketing">
                  <button
                    type="button"
                    className={showtab === 2 ? "btn btn-light active" : "btn btn-light"}
                    onClick={() => handeltab(2)}
                  >
                   Marketing Opportunities
                  </button>
                </li>
              </ul> */}
              <ul className="Brand-ul">
                <li className="Brand-Relevance">
                  <button
                    type="button"
                    className={showtab === 1 ? "active" : ""}
                    onClick={() => handeltab(1)}
                  >
                    Brand Relevance
                  </button>
                </li>
                <li className="Brand-Marketing">
                  <button
                    type="button"
                    className={showtab === 2 ? "active" : ""}
                    onClick={() => handeltab(2)}
                  >
                    Marketing Opportunities
                  </button>
                </li>
              </ul>

              <div className="Brand-content">
                <div className={showtab === 1 ? "First active" : "First"}>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                </div>
                <div className={showtab === 2 ? "Second active" : "Second"}>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>

                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                  <h2>
                    {" "}
                    <i className=" FaCheckCircle">
                      {" "}
                      <FaCheckCircle />
                    </i>{" "}
                    ____
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {/* <div className="first-section-child" /> */}
        <div className="first-section-item">
          <div class="row1">
            <div class="column">
              <div class="card01">
                <div className="head-c">
                  <img className="icon-card" src={icon7} />
                  <div className="head">
                    <p>Insight</p>
                    <h1>01</h1>
                  </div>
                </div>

                <div className="card03">
                  <p>_</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card01">
                <div className="head-c">
                  <img className="icon-card" src={icon8} />
                  <div className="head">
                    <p>Insight</p>
                    <h1>02</h1>
                  </div>
                </div>

                <div className="card03">
                  <p>_</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card01">
                <div className="head-c">
                  <img className="icon-card" src={icon9} />
                  <div className="head">
                    <p>Insight</p>
                    <h1>03</h1>
                  </div>
                </div>

                <div className="card03">
                  <p>_</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card01">
                <div className="head-c">
                  <img className="icon-card" src={icon10} />
                  <div className="head">
                    <p>Insight</p>
                    <h1>04</h1>
                  </div>
                </div>

                <div className="card03">
                  <p>_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div className="user-prompt">
    
    <div className="Prompt">
    <button
        type="button"

        // onClick={() => console.log("Button clicked")}  {/* Replace this with your button functionality */}
    >Generate
    </button>
    <textarea
        className="textarea"
        name="postContent"
        defaultValue="Enter a prompt"
    />

</div>


<div className="Response">
  <h6>Response</h6>

</div>

        </div>
        {/* {/* <div className="first-section-child2" /> */}
      

        <div className="streaming-response">v</div> 
      </div>
    </>
  );
}

export default First;
