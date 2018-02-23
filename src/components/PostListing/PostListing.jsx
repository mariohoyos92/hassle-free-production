import React from "react";
import PostPreview from "../PostPreview/PostPreview";
import Categories from '../Categories/Categories'

import './PostListing.scss'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const categories = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
      categories.push(postEdge.node.frontmatter.category)
    });
    return { postList, categories }
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {
          <Categories />
        }
        <div className="md-grid md-grid--no-spacing md-cell--middle">
          <div className="md-grid md-cell--8 mobile-fix" style={{ float: "right" }}>
            {postList.postList.map(post => (
              <PostPreview key={post.title} postInfo={post} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostListing;
