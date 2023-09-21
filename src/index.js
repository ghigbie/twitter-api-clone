const express = require("express");
require("./db/mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

const userRouter = require("./routes/user");
app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
