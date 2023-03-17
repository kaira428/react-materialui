import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://image.cnbcfm.com/api/v1/image/107090171-1658155987037-slack-imgs.jpg?v=1658156107&w=630&h=354&ffmt=webp&vtcrop=y"
          alt="Plane"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Airplanes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
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
            value={4.5}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body2" component="p" marginLeft={1.5}>
            (777 reviews)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" marginTop={0}>
            From SGD 1,234
          </Typography>
          </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;