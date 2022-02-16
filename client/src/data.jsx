import React from "react";
let registry = [
  {
    Name: "Jerusalem 1",
    Id: 1,
    city: "Jerusalem",
    Address: "Queen Shlomziyon St 20",
    Capacity: 800,
    CurrenAmount: 500,
    Updatedate: "16.02.2022",
    LastCollected: "12.02.2022",
    Percentage: 50,
  },
  {
    Name: "Tel Aviv 1",
    Id: 2,
    city: "Tel Aviv",
    Address: "Queen Shlomziyon St 8",
    Capacity: 800,
    CurrenAmount: 300,
    Updatedate: "16.02.2022",
    LastCollected: "13.02.2022",
    Percentage: 50,
  },
  {
    Name: "Haifa 1",
    Id: 3,
    city: "Haifa",
    Address: "Shlomzion Hamalka St 24",
    Capacity: 800,
    CurrenAmount: 600,
    Updatedate: "16.02.2022",
    LastCollected: "10.02.2022",
    Percentage: 50,
  },
];
let histroyRegistry = [
  {
    Id: 1,
    ינואר: 400,
    דצמבר: 600,
    נובמבר: 500,
    אוקטובר: 400,
    ספטמבר: 300,
  },
];
export default registry;
export { histroyRegistry };
