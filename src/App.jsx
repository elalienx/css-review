// Project files
import "styles/style.css";
import data from "data/profile.json";

export default function App() {
  // Properties
  const name = data[0].name;
  const imageSource = require(`./assets/${data[0].imageURL}`);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sed
        nostrum officiis dolores iusto consectetur nam tenetur eveniet hic
        aspernatur illo quod soluta sint perspiciatis fugiat. Similique pariatur
        dolore atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Velit, qui, iusto voluptate architecto nulla quasi sunt magni facere
        veniam facilis aspernatur delectus nam illo dolorem incidunt quod in
        nisi consectetur.
      </p>
      <img
        className="profile-picture"
        src={imageSource}
        alt={`The profile picture of ${name}`}
      />
    </div>
  );
}
