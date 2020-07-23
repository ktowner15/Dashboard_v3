export default {
  apps: [
    // Click environments are first, since Click has id of 0
    {
      appName: "Click",
      list: [
        { name: "AmerenD1", usage: "P3" },
        { name: "AmerenD3", usage: "No one" },
        { name: "AmerenD4", usage: "P2 Build and P1 Dev" },
        { name: "AmerenD5", usage: "P2 SIT" },
        { name: "AmerenD6", usage: "P1 Team" },
        { name: "AmerenD7", usage: "P2 UAT" },
        { name: "AmerenD8", usage: "P3 POC" },
        { name: "AmerenD9", usage: "P3 ADMS, CSS Build and Integration Test" },
        { name: "AmerenD10", usage: "P2 Cut-over" },
        { name: "Ameren11", usage: "P3 Storm Testing" },
        { name: "AmerenSB", usage: "P3 Build" }
      ]
    },
    //Whatever environment is next will have an id corresponding to the position at which its environments are placed within the 'apps' array
    {
      appName: "EnvNext",
      list: [
        { name: "next1", usage: "usage1" },
        { name: "next2", usage: "usage2" }
      ]
    }
  ]
};
