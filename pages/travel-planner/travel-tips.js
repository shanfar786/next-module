import Link from "next/link";
import React from "react";
import LayoutTwo from "../../components/layout-two";


function TravelTips(props) {
    return (
            <>
            <LayoutTwo pageTitle="Travel-tip" >
            <div className="showcontent">  
            <h2 className="showcontent-heading">Travel tips for you !</h2>
            <hr  style={{
            color: '#33BBFF',
            backgroundColor: '#33BBFF',
            height: 3,
            width: 40,
            textAlign :'left',
            margin : '0 0 10px 0',
            borderRadius: 6  }} />
            <div className='blog-grid-container'>
              {props.traveltips.map((traveltip, idx) => {
          return (
            <div className="blog-grid" key={idx}>
               <h3>{traveltip.title}</h3> 
               <img src={traveltip.cover_image} alt={traveltip.image_alt} />
               <div className="tt-data-content">
               <p className="tt-date">{traveltip.date}</p>
               <p>{traveltip.excerpt}</p>
               
              <Link href={`/travel-tips/${traveltip.slug}`}>
                <a className="tt-readmore">Read More &#8594;</a>
              </Link>
              </div>
            </div>
          );
        })}
      
      </div>

            </div>
            </LayoutTwo>
        
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

export default TravelTips;