import express from 'express';

import artistsRouter from "./routers/artistsAlbumsSongs/artists.routes.js";
import songsRouter from "./routers/artistsAlbumsSongs/songs.routes.js";
import albumsRouter from "./routers/artistsAlbumsSongs/albums.routes.js";

import searchRouter from "./routers/search.routes.js";


const app = express();

app.use(express.json());

app.use("/api/artist", artistsRouter);
app.use("/api/song", songsRouter);
app.use("/api/album", albumsRouter);
app.use("/api/search", searchRouter);

export default app;
