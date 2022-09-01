import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ContentContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const Profil = React.lazy(() => import("./pages/Profil"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <ContentContainer>
        <Menu />
        <Content>
          <Routes>
            <Route
              path="/profil/:userId"
              element={
                <React.Suspense fallback={<div>Chargement...</div>}>
                  <Profil />
                </React.Suspense>
              }
            />
          </Routes>
        </Content>
      </ContentContainer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
