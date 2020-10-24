const Types = {
  CREATE_TEST_TABLE: "CREATE_TEST_TABLE",
  CREATE_TABLE: "CREATE_TABLE",
  CHANGE_TARGET: "CHANGE_TARGET",
  UPDATE_COLUMN: "UPDATE_COLUMN",
  CREATE_TABLE: "CREATE_TABLE",
  SCALING_NORMALIZATION_CONVERSION: "SCALING_NORMALIZATION_CONVERSION"
};

const createTable = (data, targetColumnName) => {
  return { type: Types.CREATE_TABLE, data, targetColumnName };
};

const updateColumn = (column) => {
  return { type: Types.UPDATE_COLUMN, column };

};

const scalingNormalization = (data, selectedColumns, option, updated) => {
  return { type: Types.SCALING_NORMALIZATION_CONVERSION, data, selectedColumns, option, updated };
}

export default {
  createTable,
  updateColumn,
  scalingNormalization,
  Types,
};
