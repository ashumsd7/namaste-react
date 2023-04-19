import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering of header", () => {
  //load header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

//   console.log(header);

  const logo = header.getAllByTestId('logo')



  expect(logo[0].src).toBe('http://localhost/DUMMY.png')


  //check logo is present or not
});
