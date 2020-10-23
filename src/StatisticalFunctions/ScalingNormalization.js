import {
    filterNumbers,
    mean, 
    min,
    max,
    std
} from "./NumericStatsFormulas";

export const Scaling = arr => {
    const { filteredArr, removedIndices } = filterNumbers(arr);
    const scaledArr = [];

    for (let i = 0; i < filteredArr.length; i++) {
        let scaledValue = (arr[i] - min(filteredArr)) / (max(filteredArr) - min(filterArr)); 
        scaledArr.push(scaledValue);
    }

    return scaledArr;
}

export const Normalization = arr => {
    const { filteredArr, removedIndices } = filterNumbers(arr);
    const normalizedArr = [];

    for (let i = 0; i < filteredArr.length; i++) {
        let normalizedValue = (arr[i] - mean(filteredArr)) / std(filteredArr, mean(filteredArr));
        normalizedArr.push(normalizedValue);
    }

    return normalizedArr;
}