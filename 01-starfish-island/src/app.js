/* global React ReactDOM */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {
        id: "my-brand",
      },
      "Starfish Island"
    ),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese ",
    }),
    React.createElement(Pet, {
      name: "Peppper",
      animal: "Bird",
      breed: "Cicjatuek ",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
