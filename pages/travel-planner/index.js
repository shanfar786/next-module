// import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header-one";
import BannerOne from "../../components/banner-one";
import PopDestinations from "../../components/pop-destinations";
import Subscribe from "../../components/subscribe";
import Link from "next/link"
import { Container } from "react-bootstrap";



const Home = (props) => {
  return (
    <>
      <Layout pageTitle="Airvays">
        <HeaderOne />
        <BannerOne />
        <PopDestinations />
        <Subscribe />

         {/**************** Travel tip -Start *********************************/}

        <section id="travel-tip" className="airvays-section travel-background">
            <Container >
                <div className="airvays-section-title">
                    <h2 className="text-center">Travel tips</h2>
                    <hr  style={{
            color: '#33BBFF',
            backgroundColor: '#33BBFF',
            height: 3,
            width: 40,
            textAlign :'center',
           margin :' 0 auto',
            borderRadius: 5
        }} />
                    <div className="line-block"></div>
                    <div className="empty-space"></div>
                </div>
          <div className='tt-grid-container'>
              {props.traveltips.slice(0,6).map((traveltip, idx) => {
          return (
            <div className="tt-grid" key={idx}>
               
               <img href={`/travel-tips/${traveltip.slug}`} src={traveltip.cover_image} alt='' />
               <div className="tt-data-content">               
              <Link href={`/travel-tips/${traveltip.slug}`}>
              <a className="tt-box-title">{traveltip.title}</a> 
              </Link>
              </div>
            </div>
          );
        })}
      
      </div>
      </Container>


        </section>
      {/**************** Travel tip - End *********************************/}
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const traveltips = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { traveltips },
  };
}

export default Home;
