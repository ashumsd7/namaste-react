import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { data } from "../../mocks/data";
import {toBeInTheDocument} from '@testing-library/jest-dom'
// mock api calls

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

test("Search Results on  home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  ("");

  //   console.log("BODY", body);

  await waitFor(()=>expect(body.getByTestId("search-btn")))

//   const resList = body.getByTestId("res-list");
//   expect(resList.children.length).toBe(10);

//   console.log(shimmer)
 
});
