module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "HassleFreeBeatsBlog", // Site title.
  siteTitleAlt:
    "A blog for all your rap and hip hop production needs. The company blog for HassleFreeBeats.com", // Alternative site title for SEO.
  siteLogo: "/logos/header-logo-min.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://hasslefreebeatsblog.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "HassleFreeBeats is the place to buy rap and hip hop beats. This is our company blog where we share our knowledge about making and selling royalty-free beats.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "hasslefreebeatsblog", // Disqus shortname.
  postDefaultCategoryID: "Rap/Hip Hop", // Default category for posts.
  userName: "HassleFreeBeats", // Username to display in the author segment.
  userTwitter: "hasslefreebeats", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "WorldWide", // User location to display in the author segment.
  userAvatar: "/logos/HassleFreeBeats (2).png", // User avatar to display in the author segment.
  userDescription:
    "The company blog for HassleFreeBeats.com, the place to buy rap and hip hop beats with the freedom to profit.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Soundcloud",
      url: "https://soundcloud.com/hasslefreebeats",
      iconClassName: "fa fa-soundcloud"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/hasslefreebeats/",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Tumblr",
      url: "https://hasslefreebeats.tumblr.com/",
      iconClassName: "fa fa-tumblr"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/hasslefreebeats",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/hasslefreebeats",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "support@hasslefreebeats.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018 HassleFreeBeats, LLC" // Copyright string for the footer of the website and RSS feed.
};
