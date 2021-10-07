import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./cards/blog-card";

const BLOG_DATA = [
  {

    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {

    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {

    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }
];
const BlogHome = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>

        <Row>
          {BLOG_DATA.map(
            ({ image, author, date, comments, title, text, link }, index) => (
              <Col key={`blog-card-${index}`} lg={4}>
                <BlogCard

                  author={author}
                  date={date}
                  comments={comments}
                  title={title}
                  text={text}
                  link={link}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
