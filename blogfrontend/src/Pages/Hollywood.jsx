import React from "react";
// import "../Pages/HomePage/Design.css"
import "../Pages/HomePage/PageStyle.css"
import LatestArticles from "./HomePage/LatestArticles/LatestArticles";
import Data from "../Data";
import SideArticles from "./HomePage/LatestArticles/SideArticles";
import TopPost from "./HomePage/LatestArticles/TopPost";

const Hollywood = () => {
  console.log(Data);
  return (
    <div>
      <div className="container2New">
        <div className="latestTitleInPage">
          <div className="latestText">Hollywood</div>
          <div className="topPostsText">Top Posts</div>
        </div>
        <div className="splitBox1">
          <div className="splitLeft1">
            <div className="leftOuter">
              {Data.filter((curElem) => {
                return curElem.category === "Hollywood";
              }).map((elem) => {
                return (
                  <LatestArticles
                    key={elem.id}
                    img={elem.imgUrl}
                    titleText={elem.title}
                    des={elem.description.slice(0, 200)}
                  />
                );
              })}
            </div>
          </div>
          <div className="splitRight1">
            <div className="staticBox">
              <TopPost />
            </div>
            <div className="rightSide">
              <div className="rightOuter1">
                {Data.filter((curElem) => {
                  return curElem.category === "Hollywood";
                }).map((elem) => {
                  return (
                    <SideArticles
                      key={elem.id}
                      img={elem.imgUrl}
                      titleText={elem.title}
                    />
                  );
                })}
              </div>            
            <div className="ad">Advertisement</div>
            <div className="random">
              {/* <img src="http://igetitapps.com/wp-content/uploads/2014/12/3d-Stay-Tuned-Blog-posts-coming-soon.png" alt="not found" width={"98%"} height={"100%"} /> */}
              <img src="https://i.pinimg.com/736x/a6/85/86/a6858668d041490ced92daee21a5984d.jpg" alt="not found" width={"100%"} height={"100%"} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hollywood;
