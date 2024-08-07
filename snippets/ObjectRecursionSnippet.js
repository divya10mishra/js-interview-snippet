const obj = {
  address: {
    name: "test",
    location: [321312, 3213],
    subaddress: {
      line1: "sadasdsa",
    },
  },
};

const output = {
  address_name: "test",
  address_location: [321312, 3213],
  address_subaddress_line1: "sadasdsa",
};

let result = {};
function removeNesting(obj, masterKey = "") {
  Object.entries(obj).forEach(([key, value]) => {
    let newMasterKey = masterKey ? `${masterKey}_${key}` : key;
    if (typeof value == "object" && !Array.isArray(value)) {
      removeNesting(value, newMasterKey);
    } else {
      result[newMasterKey] = value;
    }
  });
  console.log(result, "result");
}

removeNesting(obj);

//----------------------------------------------------------------------------------------

//print array of all string values
let obj1 = {
  student: "divya",
  parents: {
    mother: "sandhya",
    father: "deepu",
  },
  education: {
    college: {
      highschool: "lps",
      inter: "dps",
      graduation: {
        under: "national",
        post: "sastra",
      },
    },
  },
};

let arr = [];
function makeArray(obj) {
  Object.values(obj).map((item) => {
    if (typeof item == "string") {
      arr.push(item);
    }
    if (typeof item == "object") {
      makeArray(item);
    }
  });
}
makeArray(obj1); //['divya',  'sandhya','deepu',  'lps','dps','national,'sastra']
console.log(arr);
