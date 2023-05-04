import React from "react";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <div className="mx-20 px-5 mt-3">
      <div className="w-full h-auto">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          animation="wave"
          variant="rounded"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Loading;
