const swapiApiPrefix = "https://swapi.dev/api";

export const fetchData = () => {
  return (dispatch) => {
    return fetch(`${swapiApiPrefix}/people/1/`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: "FetchData", data: json }))
      .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};
