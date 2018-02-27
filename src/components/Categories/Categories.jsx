import React from "react";
import Link from "gatsby-link";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Divider from "react-md/lib/Dividers/Divider";
import { kebabCase } from "lodash";

export default ({ categories }) => {
  return (
    <div className="categories-container">
      <Card>
        <CardTitle title={"Categories"} style={{ borderBottom: "solid grey 1px", paddingTop: "3%", paddingBottom: "3%" }} />
        <Divider />
        {
          categories.map((category) => (
            <Link
              className="category-link"
              to={`/categories/${kebabCase(category)}`}
            >
              <CardText style={{ margin: "5px 5px", padding: "2% 5%" }}>{"- " + category.charAt(0).toUpperCase() + category.slice(1)}</CardText>
            </Link>))
        }
      </Card>
    </div>
  );
}