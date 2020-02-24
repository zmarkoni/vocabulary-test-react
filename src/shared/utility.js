export const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    };
};

export const calculatePercent = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
};
