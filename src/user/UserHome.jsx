function UserHome() {

  const products = [
    { id: 1, name: "Laptop", price: "₹50,000" },
    { id: 2, name: "Mobile", price: "₹20,000" },
    { id: 3, name: "Headphones", price: "₹2,000" },
  ];

  return (

    <div className="user-home">

      {/* Navbar */}
      <header className="navbar">

        <h2 className="logo">MyShop</h2>

        <nav className="nav-links">
          <a href="#">Home  </a>
          <a href="#">Products  </a>
          <a href="#">Cart  </a>
          <a href="/user-login">Logout</a>
        </nav>

      </header>


      

      <section className="hero">

        <h1>Welcome to MyShop</h1>

        <p>
          Discover great deals on electronics, fashion and everyday essentials.
        </p>

        <button className="shop-btn">Shop Now</button>

      </section>



      <section className="products">

        <h2>Popular Products</h2>

        <div className="product-grid">

          {products.map((item) => (

            <div className="card" key={item.id}>

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button>Add to Cart</button>

            </div>

          ))}

        </div>

      </section>




    </div>

  );

}

export default UserHome;