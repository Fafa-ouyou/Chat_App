// const express = require("express");
// const { StreamChat } = require("stream-chat");

// const app = express();
// const port = 3001;

// // Remplacez par votre clé API et secret de Stream Chat
// const apiKey = "tzj54bpx6spu";
// const apiSecret = "VOTRE_API_SECRET";

// const serverClient = StreamChat.getInstance(apiKey, apiSecret);

// // Endpoint pour générer le token JWT
// app.get("/token", (req, res) => {
//   const userId = req.query.user_id;
//   if (!userId) {
//     return res.status(400).json({ error: "User ID is required" });
//   }
//   const token = serverClient.createToken(userId);
//   res.json({ token });
// });

// app.listen(port, () => {
//   console.log(`Backend en cours d'exécution sur http://localhost:${port}`);
// });
