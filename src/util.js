export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        return a.cases < b.cases;
    })
    return sortedData;
}