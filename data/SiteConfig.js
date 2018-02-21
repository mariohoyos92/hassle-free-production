module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "HassleFreeProduction", // Site title.
  siteTitleAlt:
    "A blog for all your rap and hip hop production needs. The company blog for HassleFreeBeats.com", // Alternative site title for SEO.
  siteLogo: "/logos/header-logo-min.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "A blog for all your rap and hip hop production needs. The company blog for HassleFreeBeats.com, the place to buy beats with the freedom to profit.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Rap/Hip Hop", // Default category for posts.
  userName: "HassleFreeBeats", // Username to display in the author segment.
  userTwitter: "hasslefreebeats", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "WorldWide", // User location to display in the author segment.
  userAvatar: "/logos/HassleFreeBeats (2).png", // User avatar to display in the author segment.
  userDescription:
    "A blog for all your rap and hip hop production needs. The company blog for HassleFreeBeats.com, the place to buy beats with the freedom to profit.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-material-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018 HassleFreeBeats, LLC" // Copyright string for the footer of the website and RSS feed.
};
