import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { stoksChanger } from "../redux/stoksSlice";
import { ElementOfListingStocks } from "./ElementOfListingStocks";

const socket = io("ws://localhost:4000");

export const HomePage = () => {
  const stoksData = useSelector((state) => state.stoks.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("start");

    socket.on("ticker", (e) => {
      dispatch(stoksChanger(e));
    });
  }, [dispatch]);
  return (
    <div>
      <div style={{ padding: 50 }}>
        <Container style={{ padding: 7 }}>
          <Row>
            <Col xs lg={1}></Col>
            <Col
              xs
              lg={6}
              style={{ display: "flex", justifySelf: "flex-start" }}
            >
              Company name
            </Col>
            <Col xs>Price</Col>
            <Col xs>Change</Col>
            <Col xs>Change in percent</Col>
          </Row>
        </Container>
        {stoksData.map((el, i) => {
          return (
            <ElementOfListingStocks
              key={i}
              price={el.price}
              ticker={el.ticker}
              change={el.change}
              change_percent={el.change_percent}
            />
          );
        })}
      </div>
    </div>
  );
};
