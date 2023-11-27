import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Card, Button, Dropdown, DropdownButton } from "react-bootstrap";

const GiphyViewer = () => {
  const GIPHY_URL = "https://api.giphy.com/v1/gifs";
  const API_KEY = "G3ULIp8hdEYIer5Ahy0NxwWRAeBWWklU";

  const [gifs, setGifs] = useState([]);
  const [term, setTerm] = useState("");
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    getTrending();
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = () => {
    //axios.get gifs by search term
    searchGif();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      searchGif();
    }
  };

  const searchGif = () => {
    if (!term) {
      alert("Please enter a search term");
      return;
    }

    axios
      .get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=${limit}`)
      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setTerm("");
  };

  const handleTrendingClick = () => {
    getTrending();
  };

  const getTrending = () => {
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRandomClick = () => {
    axios
      .get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.data);
        setGifs([response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelect = (amount) => {
    console.log(`limit is ${amount}`);
    setLimit(amount);
  };

  const gifComponents = gifs.map((g) => {
    return (
      <GIFCard
        key={g.id}
        image={g.images.fixed_width.url}
        title={g.title}
        url={g.url}
        username={g.username}
      />
    );
  });

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={term}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <Button variant="primary" onClick={handleClick}>
          Search
        </Button>
        <Button variant="warning" onClick={handleTrendingClick}>
          Trending
        </Button>
        <Button variant="info" onClick={handleRandomClick}>
          Random
        </Button>

        <DropdownButton onSelect={handleSelect} size='sm' id='dropdown-basic-button' title='Limit' vairiant='secondary'>
          <Dropdown.Item eventKey={15}>15</Dropdown.Item>
          <Dropdown.Item eventKey={20}>20</Dropdown.Item>
          <Dropdown.Item eventKey={25}>25</Dropdown.Item>
          <Dropdown.Item eventKey={50}>50</Dropdown.Item>
        </DropdownButton>
      </div>
      <Row xs={1} md={3} lg={5} className="g-4">
        {gifComponents}
      </Row>
    </>
  );
};

const GIFCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <a href={props.url}>{props.title}</a>
        </Card.Title>
      </Card.Body>
      <Card.Footer>@{props.username}</Card.Footer>
    </Card>
  );
};

export default GiphyViewer;
