import Products from "../products/Products";

function Home({ user }) {
  return (
    <>
      <h1>Home Page</h1>
      <Products user={user} />
    </>
  );
}

export default Home;
