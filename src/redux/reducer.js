import ACTIONS from "./actions";
import generateStatsFromRawData from "../StatisticalFunctions/StatsGenerator";
import { castNumericColumns } from "../Utilities/ObjectUtilities";
import scalingNormNewRawData from "../StatisticalFunctions/ScalingNormalization";

const intitialState = {
  rawData: [],
  targetColumnName: "",
  rawColumn: [],
  newRawData: [],
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_TABLE:
      const castedData = castNumericColumns(action.data);
      return {
        ...state,
        rawData: castedData,
        targetColumnName: action.targetColumnName,
        statsData: generateStatsFromRawData(
          castedData,
          action.targetColumnName
        ),
      };
    case ACTIONS.Types.UPDATE_COLUMN:
      return {
        ...state,
        rawColumn: action.column,
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
