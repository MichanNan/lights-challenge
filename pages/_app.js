import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
let roomLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(roomLights);

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnOnAll() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function handleTurnOffAll() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  return (
    <Layout lights={lights}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onTurnOnAll={handleTurnOnAll}
        onTurnOffAll={handleTurnOffAll}
      />
    </Layout>
  );
}
