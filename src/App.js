import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Carousel,
  Modal,
  Table,
  Badge,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import data from "./data";
import ProductTable from "./ProductTable";
import Rating from "./Rating";

const App = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));

    setCart(newCart);
  };

  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [selectedproduct, setSelectedproduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedproduct(product);
    setShowModal(true);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const products = data.products;
  const [text, setText] = useState("");

  useEffect(() => {
    const textToType = "Procurement and Supplies with Precision";
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(textToType.slice(0, i));
      i++;
      if (i > textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        sticky="top"
        expanded={expanded}
        style={{ height: "6rem" }}
      >
        <Navbar.Brand href="#home">
          <img
            src="http://www.bjatsa.co.za/wp-content/uploads/2021/08/Logo-Bjat.png"
            className="text-white ml-3"
            style={{
              width: "10rem",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="bg-light border-0"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <Nav
            style={{ marginLeft: "auto", marginRight: "2rem", color: "#000" }}
          >
            <Nav.Link href="#why-choose-us" style={{ color: "#000" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#products" style={{ color: "#000" }}>
              Products
            </Nav.Link>
            <Nav.Link
              href="#services"
              style={{ marginRight: "5rem", color: "#000" }}
            >
              Services
            </Nav.Link>

            <Button
              variant="primary"
              style={{
                backgroundColor: "#911212",
                border: "none",
                color: "#fff",
                width: "7rem",
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1408256911/photo/a-multiracial-couple-of-florists-is-checking-the-temperature-in-a-greenhouse.jpg?s=612x612&w=0&k=20&c=NszlWt40WrgP3l_k0hymb3T-QZqv_HvqP0KJ3sAdN50=") `,
          height: "30rem",
          width: "100%",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "90rem",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <Button
            style={{
              borderRadius: "0",
              backgroundColor: "#911212",
              borderColor: "#999",
              color: "#fff",
              width: "10rem",
              marginTop: "10rem",
            }}
            href="#contact"
          >
            Shop Now
          </Button>
        </div>
      </div>

      <div style={{}}>
        <h3
          style={{ color: "#911212", fontWeight: "medium" }}
          className="text-center mt-5"
        >
          {" "}
          We Supply
        </h3>

        <Row className="d-flex  justify-content-around mt-5 flex-lg-row">
          <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/121369895/photo/irrigation-equipment-on-farm-field.jpg?s=612x612&w=0&k=20&c=KYaIuLGVPHR27nO5ak8ph7DYPEyvlHmOPGiesCfPXzo="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={5}
            sm={5}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "4.5rem",
                color: "#eee",
                fontWeight: "bold",
              }}
              className="text-center"
            >
              Irrigation Equipment
            </div>
          </Col>
          <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/505442935/photo/watering-can-and-tools-in-the-garden.jpg?s=612x612&w=0&k=20&c=CjfnqzOglaF6iWNwGPzDeboHhiX6LywmTYvdKOAD1eg="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={5}
            sm={5}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "4.5rem",
                color: "#eee",
                fontWeight: "bold",
              }}
              className="text-center"
            >
              Gardening Tools
            </div>
          </Col>

          <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1184243481/photo/natural-grass-turf-installer.jpg?s=612x612&w=0&k=20&c=FXwaVPZTyiGsbczIKKqWRBgrspcC8zIN_ISt-jNSvMg="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={5}
            sm={5}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                padding: "4.5rem",
                color: "#eee",
                fontWeight: "bold",
              }}
            >
              Landscaping
            </div>
          </Col>
          <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1038785522/photo/harvest-in-mecklenburg-vorpommern-germany.jpg?s=612x612&w=0&k=20&c=FpsECFby6CJICVVHb_LQNIH4p4gJuU2sXQ72MUqDfu0="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={5}
            sm={5}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "4.5rem",
                color: "#eee",
                fontWeight: "bold",
              }}
              className="text-center"
            >
              Farming Equipment
            </div>
          </Col>
          <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1359295044/photo/blueberries-field-drip-irrigation-system.jpg?s=612x612&w=0&k=20&c=DRV43Vwvbip5XAa16AH6bUSnRblTU8F2BZ7R2IwtCe4="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={12}
            sm={12}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "30rem",
                color: "#eee",
                fontWeight: "bold",
                margin: "1rem",
              }}
              className="text-center"
            >
              Water Pumps
            </div>
          </Col>
          {/* <Col
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1184243481/photo/natural-grass-turf-installer.jpg?s=612x612&w=0&k=20&c=FXwaVPZTyiGsbczIKKqWRBgrspcC8zIN_ISt-jNSvMg="`,
              borderRadius: "0.5rem",
              height: "6rem",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
            md={2}
            xs={5}
            sm={5}
            className=" d-flex justify-content-center align-items-center mb-3"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                padding: "4.5rem",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Landscaping
            </div>
          </Col> */}
        </Row>
      </div>

      <Container>
        <div className="d-flex flex-row justify-content-between mt-5">
          <h3 style={{ color: "#000", fontWeight: "bold" }}>
            {" "}
            Featured Products
          </h3>

          <p>
            {" "}
            <u>
              <b>View All</b>
            </u>
          </p>
        </div>

        <Row className="d-flex flex-row justify-content-around mt-5">
          {products.map((product) => (
            <Card
              className="d-flex justify-content-center mt-3"
              style={{ width: "11rem" }}
              onClick={() => handleCardClick(product)}
            >
              <img
                src={product.Image}
                style={{
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "10rem",
                }}
              />

              <Card.Body>
                <div style={{ fontWeight: "bold", fontSize: "small" }}>
                  {product.name}
                </div>
                <div style={{ color: "#911212" }}>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </div>
                <div className="mt-4">
                  <p>Prices from</p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                      marginTop: "-1rem",
                    }}
                  >
                    R {product.prices[0][0]}
                  </p>
                </div>

                {product.countInStock === 0 ? (
                  <Button
                    variant="light"
                    disabled
                    style={{ paddingTop: "0.1rem", paddingBottom: "0.1rem" }}
                  >
                    {" "}
                    <small>Sold Out</small>
                  </Button>
                ) : (
                  <Button
                    className="cart d-flex align-items-end justify-content-center"
                    onClick={() => handleCardClick(product)}
                    style={{
                      width: "100%",
                      backgroundColor: "#911212",
                      border: "none",
                    }}
                  >
                    <small>
                      {" "}
                      <strong>
                        <i
                          className="fa fa-shopping-cart fa-lg"
                          aria-hidden="true"
                        ></i>{" "}
                        VIEW{" "}
                      </strong>
                    </small>
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedproduct?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductTable
              selectedproduct={selectedproduct ? selectedproduct : null}
              updateCart={updateCart}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: "#911212",
                border: "none",
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <Modal show={showCart} onHide={() => setShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart temp={cart} key={cart.length} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              localStorage.clear();
              setCart([]);
            }}
            style={{
              backgroundColor: "#911212",
              border: "none",
            }}
          >
            Clear Cart
          </Button>
          <Button
            onClick={() => setShowCart(false)}
            style={{
              backgroundColor: "#911212",
              border: "none",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          backgroundColor: " #212529",
          padding: "2rem",
          marginTop: "3rem",
        }}
      >
        <Row className="d-flex justify-content-around">
          <Col
            style={{
              color: "#fff",
              background: "transparent",
              marginTop: "2rem",
            }}
            sm={10}
            md={4}
          >
            <Card
              style={{
                color: "#fff",
                background: "transparent",
                width: "20rem",
                borderRadius: "0rem",
              }}
            >
              <img
                src="http://www.bjatsa.co.za/wp-content/uploads/2021/08/Logo-Bjat.png"
                className="text-white"
                style={{
                  width: "20rem",
                }}
              />

              <Card.Body style={{ marginLeft: "-1rem" }}>
                We are a registered company that specializes in supplying
                irrigation and farming equipment, as well as providing gardening
                services. Our team of skilled professionals is dedicated to
                delivering exceptional quality and service to our customers.
                Whether you are a farmer, gardener, or simply looking to enhance
                your outdoor space, we have the expertise and products to help
                you achieve your goals. Contact us today to learn more.
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={10}
            md={4}
            style={{ color: "#fff", marginTop: "2rem", marginLeft: "auto" }}
          >
            <h5>Contact Us</h5>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: 555-555-5555</p>
          </Col>

          <Col sm={10} md={4} style={{ color: "#fff", marginTop: "2rem" }}>
            <h5>Contact Us</h5>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: 555-555-5555</p>
          </Col>
        </Row>
      </div>
      <div
        className="d-flex cart-badge-container"
        style={{
          cursor: "pointer",
          position: "fixed",
          right: 0,
          top: "95%",
          transform: "translateY(-50%)",
          zIndex: 9999, // make sure it's on top of other elements

          filter: "brightness(110%)",
        }}
        onClick={() => handleCartClick()}
      >
        <div>
          <i
            className="fa fa-shopping-cart fa-lg fa-bounce"
            aria-hidden="true"
            style={{
              fontWeight: "bold",
              color: "#ddd",
              fontSize: "40px",
              transform: "translate(1.5rem)",
              backgroundColor: "#911212",
              borderRadius: "50%",
              paddingLeft: "0.1rem",
              paddingRight: "0.1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          ></i>

          {cart.length >= 0 && (
            <span
              style={{
                paddingLeft: "0rem",
              }}
            >
              <Badge
                pill
                bg="danger"
                className="mx-2"
                style={{
                  transform: "translateY(-1.2rem)",
                }}
              >
                {cart.length}
              </Badge>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
