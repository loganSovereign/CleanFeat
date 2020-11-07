import ACTIONS from "./actions";
import generateStatsFromRawData from "../StatisticalFunctions/StatsGenerator";
import { castNumericColumns } from "../Utilities/ObjectUtilities";
import scalingNormNewRawData from "../StatisticalFunctions/ScalingNormalization";

const intitialState = {
  rawData: [],
  targetColumnName: "",
  rawColumn: [],
  newRawData: [],
  columnNames: [],
  data: []   // an Array of Objects with Features as the keys
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_TABLE:
      const castedData = castNumericColumns(action.data);
      return {
        ...state,
        rawData: castedData,
        targetColumnName: action.targetColumnName,
        statsData: generateStatsFromRawData(castedData, action.targetColumnName),
        data: castedData
      };
    case ACTIONS.Types.UPDATE_COLUMNS:
      return {
        ...state,
        columnNames: action.columns
      };
    case ACTIONS.Types.UPDATE_TABLE:
      return {
        ...state,
        rawData: action.updatedData,
        statsData: generateStatsFromRawData(
          action.updatedData,
          state.targetColumnName
        )
      };
    case ACTIONS.Types.SCALING_NORMALIZATION_CONVERSION:
      const castedData2 = castNumericColumns(action.data);
      return {
        ...state,
        selectedColumns: action.selectedColumns,
        updated: action.updated,
        newRawData: scalingNormNewRawData(
         castedData2,
         action.selectedColumns,
         action.option
        )
      }
    default:
      return state;
  }
};
