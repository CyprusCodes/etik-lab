import { useState, useEffect } from "react";

interface LikesData {
  [key: string]: number;
}

export function useLikes(panelName: string) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Load likes from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem("etiklab-panel-likes");
    const savedLikedPanels = localStorage.getItem("etiklab-liked-panels");

    if (savedLikes) {
      try {
        const likesData: LikesData = JSON.parse(savedLikes);
        setLikes(likesData[panelName] || 0);
      } catch (e) {
        console.error("Error parsing likes data:", e);
      }
    }

    if (savedLikedPanels) {
      try {
        const likedPanels: string[] = JSON.parse(savedLikedPanels);
        setHasLiked(likedPanels.includes(panelName));
      } catch (e) {
        console.error("Error parsing liked panels data:", e);
      }
    }
  }, [panelName]);

  const toggleLike = () => {
    const savedLikes = localStorage.getItem("etiklab-panel-likes");
    const savedLikedPanels = localStorage.getItem("etiklab-liked-panels");

    let likesData: LikesData = {};
    let likedPanels: string[] = [];

    if (savedLikes) {
      try {
        likesData = JSON.parse(savedLikes);
      } catch (e) {
        console.error("Error parsing likes data:", e);
      }
    }

    if (savedLikedPanels) {
      try {
        likedPanels = JSON.parse(savedLikedPanels);
      } catch (e) {
        console.error("Error parsing liked panels data:", e);
      }
    }

    if (hasLiked) {
      // Remove like
      const newLikes = Math.max(0, (likesData[panelName] || 0) - 1);
      likesData[panelName] = newLikes;
      likedPanels = likedPanels.filter((panel) => panel !== panelName);
      setLikes(newLikes);
      setHasLiked(false);
    } else {
      // Add like
      const newLikes = (likesData[panelName] || 0) + 1;
      likesData[panelName] = newLikes;
      likedPanels.push(panelName);
      setLikes(newLikes);
      setHasLiked(true);
    }

    localStorage.setItem("etiklab-panel-likes", JSON.stringify(likesData));
    localStorage.setItem("etiklab-liked-panels", JSON.stringify(likedPanels));
  };

  return { likes, hasLiked, toggleLike };
}
