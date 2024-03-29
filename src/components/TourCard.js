import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
            color: "blue",
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({
  name,
  duration,
  rating,
  numberOfReviews,
  price,
  image,
}) => {
  return (
    <Grid item xs={12} md={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Box>
            <img src={image} alt={name} className="img" />
          </Box>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5, marginLeft: 0.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              value={rating}
              readOnly
              precision={0.5}
              size="small"
              sx={{ marginLeft: 0.5 }}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              ({numberOfReviews} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="h3"
              marginTop={0}
              marginLeft={1}
            >
              From SGD {price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
