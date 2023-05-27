import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/video",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
