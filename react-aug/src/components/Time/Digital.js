import React, { useState, useEffect } from "react";
let Digital = () => {
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    console.log("Birth");
    let timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("Component UnMount - Death");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary">{currentTime}</div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Digital;
