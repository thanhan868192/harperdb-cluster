const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const nodes = {
  node1: "http:///HDB_ADMIN:admin123@localhost:9925",
  node2: "http:///HDB_ADMIN:admin123@localhost:9927",
  node3: "http:///HDB_ADMIN:admin123@localhost:9929",
};

app.post("/dogs", async (req, res) => {
  try {
    const response = await axios.post(
      `${nodes.node1}/books`,
      {
        operation: "insert",
        schema: "dev",
        table: "dogs",
        records: [{ id: req.body.id, name: req.body.name }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/dogs/:id", async (req, res) => {
  try {
    const response = await axios.get(
      nodes.node2,
      {
        operation: "search_by_hash",
        schema: "dev",
        table: "dogs",
        hash_values: [req.params.id],
        get_attributes: ["*"],
      },
      { headers: { "Content-Type": "application/json" } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Backend running at http://localhost:3000"));
