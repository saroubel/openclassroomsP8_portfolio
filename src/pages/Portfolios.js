import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PortfoliosView from "../components/PortfoliosView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Portfolios() {
  const [portfolios, setPortfoios] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolios").then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    
    return () => (mounted = false);
  }, []);

  
  return (
    <Layout>
      <Helmet>
        <title>projets - Portfolio de Sara Bellaf</title>
        <meta
          name="description"
          content="Page projets du Portfolio Personel de Sara Bellaf"
        />
      </Helmet>

      <Suspense fallback={<Spinner />}>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">

            <Sectiontitle title="Mes projets" />
            {<PortfoliosView portfolios={portfolios} />}

          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Portfolios;
