// import React from "react";
// import { Box } from "@mui/material";
// import BodyPart from '../components/BodyPart'

// const HorizontalScrollbar = ({ data , BodyPart, setBodyPart}) => {
//   return (
//     <div>
//       {data.map((item) => (
//         <Box
//           key={item.id || item}
//           itemId={item.id || item}
//           title={item.id || item} m="0 40px"
//         >
//             <BodyPart item={item} BodyPart=
//             {BodyPart} setbodypart = {setBodyPart}/>
//         </Box>
//       ))}
//     </div>
//   );
// };

// export default HorizontalScrollbar;
import React from "react";
import { Box } from "@mui/material";
import BodyPart from '../components/BodyPart'

const HorizontalScrollbar = ({ data, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
