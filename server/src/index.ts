import express from "express";
import cors from "cors";
import { getAfiliates } from "./services/afiliatesService";
import { admin } from './firebase/firebase';
import { HttpStatusCode } from "axios";

let claves = {
  "agarcia@osseg.org.ar": "Alejandra.2024",
  "vdiaz@osseg.org.ar": "Valeria.2024",
  "fmartire@osseg.org.ar": "Fabiana.2024",
  "lfernandez@osseg.org.ar": "Liliana.2024",
  "aspinelli@osseg.og.ar": "Anamaria.2024",
  "lsaconi@osseg.org.ar": "Laura.2024",
  "apinto@osseg.org.ar": "Andres.2024",
  "lmoreno@osseg.org.ar": "Lucia.2024",
  "cmorrone@osseg.org.ar": "Carolina.2024",
  "mmastrocola@osseg.org.ar": "Melisa.2024",
  "rcastro@osseg.org.ar": "Romina.2024",
  "paguirre@osseg.org.ar": "Pablo.2024",
  "bsantoro@osseg.org.ar": "Beatriz.2024",
  "sdevoto@osseg.org.ar": "Susana.2024",
  "pmautone@osseg.org.ar": "Patricio.2024",
  "jgriguoli@osseg.org.ar": "Jorge.2024",
  "apose@osseg.org.ar": "Adriana.2024",
  "sayala@osseg.org.ar": "Sonia.2024",
  "vcalderon@osseg.org.ar": "Valeria.2024",
  "vlujan@osseg.org.ar": "Veronica.2024",
  "mvignoni@osseg.org.ar": "Monica.2024",
  "rlage@osseg.org.ar": "Mariadelrosario.2024",
  "srasmussen@osseg.org.ar": "Silvia.2024",
  "nperovich@osseg.org.ar": "Nair.2024",
  "macampbell@osseg.org.ar": "Maria.2024",
  "joelbeenue@gmail.com": "Joel1234",
};

const app = express();
const port = 3002;

const allowedOrigins = ["https://audifarmsalud.dev", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin: any, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


app.post("/afiliates", async function (req, res) {
  const jwt = req.headers.authorization || "not_sent"
  const payload = req.body;
  try {
    const user = await admin.auth().verifyIdToken(jwt);

    console.log(user)

    res.json(await getAfiliates(payload));
  } catch (error) {
    res.statusCode = HttpStatusCode.BadRequest
    res.json({message: "failed to fetch afiliates", status: "error"},)
  }
});