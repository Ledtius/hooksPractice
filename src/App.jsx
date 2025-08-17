import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <Card title={"Title of the card"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad saepe
          asperiores dolorum necessitatibus debitis praesentium reiciendis
          harum, veritatis, dolor obcaecati tempore quia molestias dicta dolores
          minus ducimus cumque similique.
        </p>
      </Card>
      <br />

      <Card children={"Other description"} title={"Other title"} />
    </>
  );
}

export default App;
