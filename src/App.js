import "./App.css";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/AppBar";
import cities from "./data/data";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container sx={{ marginTop: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard
                  key={index}
                  name={tour.name}
                  duration={tour.duration}
                  rating={tour.rating}
                  numberOfReviews={tour.numberOfReviews}
                  price={tour.price}
                  image={tour.image}
                />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}

export default App;
