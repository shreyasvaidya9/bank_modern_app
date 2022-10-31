import React from "react";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

import styles from "./styles";

const { paddingX, flexCenter, boxWidth, flexStart } = styles;

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${paddingX} ${flexCenter}`}>
      <div className={`${boxWidth}`}>
        <Navbar />
      </div>
    </header>
    <main>
      <div className={`bg-primary ${flexStart}`}>
        <div className={`${boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${paddingX} ${flexStart}`}>
        <div className={`${boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </main>
    <footer>
      <div className={`bg-primary ${paddingX} ${flexStart}`}>
        <div className={`${boxWidth}`}>
          <Footer />
        </div>
      </div>
    </footer>
  </div>
);

export default App;
