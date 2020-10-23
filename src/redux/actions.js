const Types = {
  CREATE_TABLE: "CREATE_TABLE"
};

const createTable = (data, targetColumnName) => {
  return { type: Types.CREATE_TABLE, data, targetColumnName };
};

const chooseFeaturesForScaling = (features) => {
  return { type: Types.CHOOSE_FEATURES_FOR_SCALING, features};
}

const chooseFeaturesForNormalization = (features) => {
  return { type: Types.chooseFeaturesForNormalization, features};
}

export default {
  createTable,
  Types
};
