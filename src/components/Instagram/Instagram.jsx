import React, { useEffect, useState } from "react";

import './Instagram.css'

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      const token = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your token
      const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink&limit=3&access_token=${token}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <div className="instagram-feed">
      {posts.map((post) => (
        <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
          <img src={post.media_url} alt="Instagram Post" className="instagram-image" />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;