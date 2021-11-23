import React from "react";
import Layout from "../../components/layout";
import HeaderTwo from "../../components/header-two";
import { Container} from "react-bootstrap";

function TravelTipsDetails(props) {
  return (
    <>
    <Layout pageTitle={props.traveltip.meta_data}>
      <HeaderTwo />
      <section className="airvays-section">
      <Container className="help-cont">
        <div className="tt-detials">
      <img src={props.traveltip.cover_image}  alt={props.traveltip.image_alt} />
      <p >{props.traveltip.cridits}</p>
      <h2>{props.traveltip.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.traveltip.content }}
      >
        </div>
        </div></Container>
      </section>

</Layout>
    </>
  );
}


export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; 
  const path = `${process.cwd()}/contents/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      traveltip: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths(context) {
  const fs = require("fs");

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default TravelTipsDetails;
