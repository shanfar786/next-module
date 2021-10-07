import React from "react";
// import { Nav } from "react-bootstrap";
import Link from "next/link";
// import { withRouter } from "react-router";
// import YourTripScore from "../components/your-trip-score";

const Sidebar = () => {


  return (
    <>

      {/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Link href="/dashboard/your-trip-score">Active</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}

      <div className="sidebar">
        <div>
          <i className="fas fa-user"></i>
          <Link href="/dashboard/your-trip-score">
            <a className="active sidebar-user" >Trip score</a></Link></div>
        <div><i className="fas fa-bell"></i>
          <Link href="/dashboard/covid-19">
            <a className=" sidebar-user ">Covid-19</a></Link></div>
        <div> <i className="far fa-heart"></i>
          <Link href="/dashboard/destination">
            <a className=" sidebar-user ">Destination</a></Link></div>
        <div><i className="far fa-file-alt"></i>
          <Link href="/dashboard/attractions">
            <a className=" sidebar-user ">Attractions</a></Link></div>
        <div> <Link href="/dashboard/travel-tips">
          <a className=" sidebar-user ">Travel tips</a></Link></div>
      </div>
    </>
  );
};
// const Sidebar = withRouter(Side);
export default Sidebar