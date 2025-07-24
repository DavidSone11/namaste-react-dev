import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Rating,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function RestCardComponent(props) {
    const {restData} = props
  //   const [value, setValue] = useState(3.5);
  const rating = 3.9;
  return (
    <Box sx={{ cursor: "pointer" }}>
     {
      <Card
        sx={{
          maxWidth: 240,
          height:"auto",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardMedia
          sx={{ width: 240, height: 180 }}
          image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData.info.cloudinaryImageId}`}
          title={restData.info.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 700 }}
            component="div"
          >
            {restData.info.name}
          </Typography>
          <Stack direction="row" spacing={2}>
            {/* <Box>
              <Rating
                name="interactive-rating"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => setValue(newValue)}
              />
              <Typography variant="body2">{value}</Typography>
            </Box> */}
            <Box display="flex" alignItems="center" gap={0.5}>
              <StarIcon sx={{ color: "green", fontSize: 18 }} />
              <Typography variant="body2" fontWeight="bold">
                {restData.info.avgRating}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#000", fontWeight: 600 }}>
              {restData.info.sla.slaString}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "#000", fontWeight: 600 }}>
            {restData.info.costForTwo}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {restData.info.cuisines.join(", ")}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {restData.info.locality}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    }
    </Box>
  );
}

export default RestCardComponent;
