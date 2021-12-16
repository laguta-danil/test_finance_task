import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ElementOfListingStocks = ({
  ticker,
  price,
  change,
  change_percent,
  prevData,
}) => {
  const stoksData = useSelector((state) => state.stoks.arr);

  const companyName = () => {
    switch (ticker) {
      case "AAPL":
        return "Apple";
      case "GOOGL":
        return "Google";
      case "MSFT":
        return "Microsoft";
      case "AMZN":
        return "Amazone";
      case "FB":
        return "Facebook";
      case "TSLA":
        return "Tesla";
      default:
        return "nothing";
    }
  };

  if (!stoksData.length) {
    return <div></div>;
  }

  return (
    <>
      <Container style={{ padding: 7, borderTop: "1px solid #cccccc" }}>
        <Row>
          <Col
            xs
            lg={1}
            style={{
              color: "white",
              backgroundColor: "#c4c4c4",
              borderRadius: "7px",
            }}
          >
            {ticker}
          </Col>
          <Col xs lg={6} style={{ display: "flex", justifySelf: "flex-start" }}>
            {companyName()}
          </Col>
          <Col
            xs
            style={{
              color: "red",
              backgroundColor: "#ffdbd6",
              borderRadius: "7px",
            }}
          >
            {price} $
          </Col>
          <Col
            xs
            style={{
              color: "green",
              backgroundColor: "#adffb1",
              borderRadius: "7px",
            }}
          >
            {change} $
          </Col>
          <Col xs>{change_percent} </Col>
        </Row>
      </Container>
    </>
  );
};
