import { Typography } from "@mui/material";

const ContentCheck = ({ content }) => {
  console.log("hello content", content);
  return (
    <div>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "25px", textAlign: "center", marginTop: "10px" }}
      >
        {content}
      </Typography>
    </div>
  );
};

export default ContentCheck;
