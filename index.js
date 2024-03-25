const notesList = [
  {
    id: 1,
    title: "coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },

  {
    id: 3,
    title: "tract.js interview",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },

  {
    id: 1,
    title: "cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function filterStatus(data, status) {
  switch (status) {
    case "all": {
      return data;
    }
    case "completed": {
      return data.filter((note) => note.completed);
    }
    case "uncompleted": {
      return data.filter((note) => !note.completed);
    }
    default: {
      return data;
    }
  }
}
function sortData(data, sortBy) {
  if (sortBy === "earliest") {
    return [...data].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
  if (sortBy === "latest") {
    return [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

function queryData(data, { filter, sortBy, status }) {
  let filteredData;
  filteredData = data.filter((e) =>
    e.title.toLowerCase().includes(filter.trim().toLowerCase())
  );
  filteredData = filterStatus(filteredData, status);
  filteredData=sortData(filteredData,sortBy)

  return filteredData;
}
console.log(
  queryData(notesList, { sortBy: "earliest", filter: "", status: "" })
);
