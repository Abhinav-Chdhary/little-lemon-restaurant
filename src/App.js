import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import BookPage from "./Pages/BookPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TitleBar from "./components/TitleBar";
export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <TitleBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
