import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

interface ApiResponse {
  city: string;
}

const App: React.FC = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        "https://api.ipdata.co/?api-key=e07379196484786212b7e799d61ab0d1a31f6d42e2b835b37827b727"
      );
      const data = (await request.json()) as ApiResponse;
      const userCity = data.city;
      setLocation(userCity);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <Hero location={location} />
    </div>
  );
};

export default App;
