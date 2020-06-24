const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      size: "large",
      id: 2,
      linkUrl: "sneakers",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      size: "large",
      id: 3,
      linkUrl: "jackets",
    },
    
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "mens",
    },
  ],
};

export default (state = initialState, { type}) => {
  switch (type) {
    default:
      return state;
  }
};
