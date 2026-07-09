const initialState = {
  loading: false,

  services: [],

  service: {
    serviceName: "",
    department: "",
    category: "",
    description: "",
    eligibility: "",

    documentsRequired: [],

    applicationProcess: "",

    officialWebsite: "",

    serviceCharge: 0,

    status: "Active",

    createdBy: null,

    createdAt: null,
    updatedAt: null,
  },
};

export default initialState;
