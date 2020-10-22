const Types = {
  CREATE_TEST_TABLE: "CREATE_TEST_TABLE",
  CREATE_TABLE: "CREATE_TABLE",
  CHANGE_TARGET: "CHANGE_TARGET",
  CHOOSE_FEATURES_FOR_SCALING: "CHOOSE_FEATURES_FOR_SCALING",
  CHOOSE_FEATURES_FOR_NORMALIZATION: "CHOOSE_FEATURES_FOR_NORMALIZATION"
};

const createTestTable = () => {
  return { type: Types.CREATE_TEST_TABLE };
};

const createTable = (data) => {
  return { type: Types.CREATE_TABLE, data };
};

const changeTarget = (target) => {
  return { type: Types.CHANGE_TARGET, target };
};

const chooseFeaturesForScaling = (features) => {
  return { type: Types.CHOOSE_FEATURES_FOR_SCALING, features};
}

const chooseFeaturesForNormalization = (features) => {
  return { type: Types.chooseFeaturesForNormalization, features};
}

export default {
  createTable,
  createTestTable,
  changeTarget,
  chooseFeaturesForNormalization,
  chooseFeaturesForScaling,
  Types,
};
