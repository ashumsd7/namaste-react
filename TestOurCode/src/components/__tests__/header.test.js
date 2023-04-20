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



// online status
test("ONLINE SHUD BE GREEN", () => {
    //load header
  
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
  //   console.log(header);
  
    const onlineStatus = header.getByTestId('online-status')
    expect(onlineStatus.innerHTML).toBe('🟢 ONLINE')
  
  
    //check logo is present or not
  });
  

  // cart has 0 items
test("CART SHOULD HAVE 0 ITEMS", () => {
    //load header
  
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  

  //   console.log(header);
  
    const cart = header.getByTestId('cart')
    expect(cart.innerHTML).toBe('Cart(0)')
  
  
    //check logo is present or not
  });