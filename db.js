

const sampleData = {
    reviews: [
      { id: "1", rating: 4, content: "Great game, really enjoyed it!", gameId: "1", authorId: "1" },
      { id: "2", rating: 5, content: "Absolutely amazing, must play!", gameId: "2", authorId: "2" },
      { id: "3", rating: 3, content: "Decent game, but could be better.", gameId: "3", authorId: "3" }
    ],
    games: [
      { id: "1", title: "The Witcher 3: Wild Hunt", platform: ["PC", "PlayStation 4", "Xbox One"] },
      { id: "2", title: "Red Dead Redemption 2", platform: ["PC", "PlayStation 4", "Xbox One"] },
      { id: "3", title: "The Legend of Zelda: Breath of the Wild", platform: ["Nintendo Switch", "Wii U"] }
    ],
    authors: [
      { id: "1", name: "John Doe", verified: true },
      { id: "2", name: "Jane Smith", verified: true },
      { id: "3", name: "Alex Johnson", verified: false }
    ]
  };
  
  export default sampleData;
   