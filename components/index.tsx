import Hero from "./Hero";
import Card from "./Card";
import Cards from "./Cards";
import Nav from "./Nav";
import Filter from "./Filter";
import Footer from "./Footer";
import React, { useState } from "react";
import Skeleton from "./Skeleton";
import { QueryClientProvider, QueryClient } from "react-query";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Hero />
      <Filter />
      <Cards />
      <Footer />
    </QueryClientProvider>
  )
}

export { Hero, Card, Cards, Nav, Footer, Filter, Skeleton };
