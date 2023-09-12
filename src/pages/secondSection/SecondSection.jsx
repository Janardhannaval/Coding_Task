import React, { useEffect, useRef, useState } from "react";
import "./SecondSectionStyle.css";
export default function SecondSection() {
  const [file, setFile] = useState({
    file1: "",
    file2: "",
    file3: "",
    file4: "",
  });
  const fileRef1 = useRef();
  const fileRef2 = useRef();
  const fileRef3 = useRef();
  const fileRef4 = useRef();
  const handleSetFile1 = (arg) => {
    let createUrl = URL.createObjectURL(arg);
    setFile({ ...file, file1: createUrl });
  };
  console.log(file);
  const handleSetFile2 = (arg) => {
    let createUrl = URL.createObjectURL(arg);
    setFile({ ...file, file2: createUrl });
  };
  const handleSetFile3 = (arg) => {
    let createUrl = URL.createObjectURL(arg);
    setFile({ ...file, file3: createUrl });
  };
  const handleSetFile4 = (arg) => {
    let createUrl = URL.createObjectURL(arg);
    setFile({ ...file, file4: createUrl });
  };
  const handleFileClick1 = () => {
    fileRef1.current.click();
  };
  const handleFileClick2 = () => {
    fileRef2.current.click();
  };
  const handleFileClick3 = () => {
    fileRef3.current.click();
  };
  const handleFileClick4 = () => {
    fileRef4.current.click();
  };

  return (
    <div className="container secondSectionContainer">
      <div className="row">
        <div className="col-lg-3 col-6 ">
         <div>
         <div className="hoverIconBorder">
            <i class="bi bi-globe2 icons"></i>
          </div>
          <div>
            <h5>Research</h5>
            <p className="subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequuntur porro ab molestiae aut delectus.
            </p>
          </div>
         </div>
        </div>
        <div className="col-lg-3 col-6  ">
          <div className="hoverIconBorder">
            <i class="bi bi-laptop icons"></i>
          </div>
          <div>
            <h5>Full Customizable</h5>
            <p className="subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequuntur porro ab molestiae aut delectus.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-6 pt-lg-0 pt-5">
          <div className="hoverIconBorder">
            <i class="bi bi-chat-left-text icons"></i>
          </div>
          <div>
            <h5>Coordination</h5>
            <p className="subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequuntur porro ab molestiae aut delectus.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-6 pt-lg-0 pt-5">
          <div className="hoverIconBorder">
            <i class="bi bi-gear-wide-connected icons"></i>
          </div>
          <div>
            <h5>Test</h5>
            <p className="subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequuntur porro ab molestiae aut delectus.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="headingText">
          <h2>Let Them Know Why you're the Best</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            tempora?
          </p>
        </div>
      </div>

      <div className="boxContainer ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <input
              type="file"
              ref={fileRef1}
              onChange={(e) => handleSetFile1(e.target.files[0])}
              className="fileInput"
            />{" "}
            <input
              type="file"
              ref={fileRef2}
              onChange={(e) => handleSetFile2(e.target.files[0])}
              className="fileInput"
            />{" "}
            <input
              type="file"
              ref={fileRef3}
              onChange={(e) => handleSetFile3(e.target.files[0])}
              className="fileInput"
            />{" "}
            <input
              type="file"
              ref={fileRef4}
              onChange={(e) => handleSetFile4(e.target.files[0])}
              className="fileInput"
            />{" "}
            {file.file1 ? (
              <img src={file.file1} className="previewImg" alt="" />
            ) : (
              <div className="fourBorder">
                <i
                  className={`bi bi-plus-circle hiddenIcon`}
                  onClick={() => handleFileClick1()}
                ></i>
              </div>
            )}
          </div>
          <div className="col-lg-3 col-md-6 pt-2 pt-lg-0 d-flex justify-content-center">
            {file.file2 ? (
              <img src={file.file2} className="previewImg" alt="" />
            ) : (
              <div className="fourBorder">
                <i
                  className={`bi bi-plus-circle hiddenIcon`}
                  onClick={() => handleFileClick2()}
                ></i>
              </div>
            )}{" "}
          </div>
          <div className="col-lg-3 col-md-6 pt-md-3 pt-lg-0 pt-2 d-flex justify-content-center">
            {file.file3 ? (
              <img src={file.file3} className="previewImg" alt="" />
            ) : (
              <div className="fourBorder">
                <i
                  className={`bi bi-plus-circle hiddenIcon`}
                  onClick={() => handleFileClick3()}
                ></i>
              </div>
            )}{" "}
          </div>
          <div className="col-lg-3 col-md-6 pt-md-3 pt-lg-0 pt-2 d-flex justify-content-center">
            {file.file4 ? (
              <img src={file.file4} className="previewImg" alt="" />
            ) : (
              <div className="fourBorder">
                <i
                  className={`bi bi-plus-circle hiddenIcon`}
                  onClick={() => handleFileClick4()}
                ></i>
              </div>
            )}{" "}
          </div>
        </div>
      </div>

      <div className="row roundedBoxContainer">
        <div className="col-lg-3 col-6 d-flex justify-content-centers">
          <div>
            <div className="roundedBox">
              <i class="bi bi-globe2 "></i>
            </div>
            <div>
              <h5>Dexter Gilbert</h5>
              <p className="subText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequuntur porro ab molestiae aut delectus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6 d-flex justify-content-center">
          <div>
            <div className="roundedBox">
              <i class="bi bi-laptop "></i>
            </div>
            <div>
              <h5>Mary Collier</h5>
              <p className="subText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequuntur porro ab molestiae aut delectus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6 d-flex justify-content-center">
          <div>
            <div className="roundedBox">
              <i class="bi bi-chat-left-text "></i>
            </div>
            <div>
              <h5>Stefan Morrison</h5>
              <p className="subText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequuntur porro ab molestiae aut delectus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6 d-flex justify-content-centers">
          <div>
            <div className="roundedBox">
              <i class="bi bi-gear-wide-connected "></i>
            </div>
            <div>
              <h5>Bill Smith</h5>
              <p className="subText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequuntur porro ab molestiae aut delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
