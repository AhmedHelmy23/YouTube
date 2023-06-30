import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "./utils/fetchFromApi";
import Videos from './Videos'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=data`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,205,1) 100%)",
              height:"300px",
              zIndex:10,}}/>

        <ChannelCard ChannelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display='flex' p='2'>
      <Box sx={{mr:{sm:'100px'}}} />
   


      </Box>
    </Box>
  );
};

export default ChannelDetail;
