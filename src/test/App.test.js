import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("should render correctly with no props", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it("should render correctly with no props", () => {
  const component = shallow(<Navbar />);
  expect(component).toMatchSnapshot();
});

it("should render correctly with no props", () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});

it("should render correctly with no props", () => {
  const component = shallow(<Modal />);
  expect(component).toMatchSnapshot();
});

it("should render correctly with no props", () => {
  const component = shallow(<Image />);
  expect(component).toMatchSnapshot();
});

it("should render correctly with no props", () => {
  const component = shallow(<SearchBox />);
  expect(component).toMatchSnapshot();
});

// it("renders correctly", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it("render correctly Navbar component", () => {
//   const component = renderer.create(<Navbar />).toJSON();
//   expect(component).toMatchSnapshot();
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe("<Image />", () => {
//   let shallowComp;
//   beforeEach(() => {
//     const props = {
//       key: 1,
//       url:
//         "https://pixabay.com/get/52e5d3414e55a414f6da8c7dda79367d1c3fdcec53536c4870287add9248c05cb8_1280.jpg"
//     };

//     shallowComp = shallow(<Image url={props.url} />);
//   });
//   test("should render 3 imgs- link, dots and share", () => {
//     const imgResult = shallowComp.find("img");
//     expect(imgResult).toHaveLength(3);
//   });
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <BrowserRouter>
//       <Image />
//     </BrowserRouter>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe("<Navbar/>", () => {
//   let shallowComp;
//   beforeEach(() => {
//     shallowComp = shallow(<Navbar />);
//   });

//   test("should have 8", () => {
//     const button = shallowComp.find("button");
//     expect(button).toHaveLength(8);
//   });
// });
