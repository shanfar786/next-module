import React from "react";
// import { Nav } from "react-bootstrap";
import Link from "next/link";
// import { withRouter } from "react-router";
// import YourTripScore from "../components/your-trip-score";
import { Row } from "react-bootstrap";
const Sidebar = () => {


  return (
    <>

      <div className="sidebar ">
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

      <div className="Container d-lg-none">
        <Row>
        <Link href="/dashboard/your-trip-score">
            <a className="active sidebar-user" >Trip score</a></Link>
            <Link href="/dashboard/your-trip-score">
            <a className="active sidebar-user" >Trip score</a></Link>
            <Link href="/dashboard/your-trip-score">
            <a className="active sidebar-user" >Trip score</a></Link>
        </Row>
      </div>
    </>
  );
};
// const Sidebar = withRouter(Side);
export default Sidebar