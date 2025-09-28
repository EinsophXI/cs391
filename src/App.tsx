export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      const rawData = await fetch("apilink");
      const actualData = await rawData.json();
      setData(actualData.results) //results is example
    }
    fetchData()
      .then(() => console.log("Everything good"))
      .catch((e) => console.log("Something wrong"));
  }, [data.length]);

  return {
    <>
    <Characters data={data} />
    </>
  }
}