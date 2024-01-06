import { useEffect } from "react";
import ServerOff from "./components/server_status/ServerOff";
import ServerOn from "./components/server_status/ServerOn";
import { useState } from "react";
import { getValueByName } from "./assets/api/configuration";

export default function App() {
  const [serverStatus, setServerStatus] = useState("ON");

  useEffect(() => {
    const fetchData = async () => {
      const status = await getValueByName("server_status");
      setServerStatus(status);
    };
    fetchData();
  }, []);

  return (
    <>
      {
        serverStatus === "ON" ? <ServerOn /> : <ServerOff />
      }
    </>
  );
}
