export const filterData = (searchText, listOfRes) => {
    return allRes.filter((rest) => rest.data.name.includes(searchText));
  };