import { Col, Container, Row, Form } from "react-bootstrap";

import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const europeanCountries = [
    "AL", // Arnavutluk
    "AT", // Avusturya
    "BE", // Belçika
    "BG", // Bulgaristan
    "HR", // Hırvatistan
    "CZ", // Çek Cumhuriyeti
    "FR", // Fransa
    "DE", // Almanya
    "GR", // Yunanistan
    "HU", // Macaristan
    // Daha fazla Avrupa ülkesi ekleyebilirsiniz...
  ];

  function getCountry(code) {
    // GraphQL sorgusu
    const query = `
  query {
    country(code: "${code}") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
  `;
    const apiUrl = "https://countries.trevorblades.com/graphql";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        // API yanıtı işleme
        const countryData = data.data.country;
        setCountries((country) => [...country, countryData]);
        // console.log('Ülke Adı:', countryData.name);
        // console.log('Ana Dil:', countryData.native);
        // console.log('Başkent:', countryData.capital);
        // console.log('Bayrak:', countryData.emoji);
        // console.log('Para Birimi:', countryData.currency);
        // console.log('Konuşulan Diller:');
        // countryData.languages.forEach((language) => {
        //   console.log(`- ${language.name} (${language.code})`);
        // });
      })
      .catch((error) => {
        console.error("GraphQL Sorgusu Hatası:", error);
      });
  }

  useEffect(() => {
    europeanCountries.forEach((country) => {
      getCountry(country);
    });
  }, []);

  return (
    <>
      <Form.Control
        placeholder="Search Country..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3 ">
        <Row className="g-3 justify-content-center">
          {countries
            .filter((country) =>
              country.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((country, i) => {
              return (
                <Col xl={3} lg={4} md={6} key={i}>
                  <CountryCard {...country} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
