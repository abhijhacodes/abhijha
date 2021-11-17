import styled from "@emotion/styled";
import { Stack } from "@chakra-ui/react";

export const PostContainer = styled(Stack)`
  &&& {
    padding-top: 24px;
    font-size: 16px;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    code {
      margin-top: 20px;
    }
    li {
      margin-left: 25px;
    }
    p {
      margin: 10px 0 10px 0;
    }
    img {
      display: block;
      margin: 20px auto 20px auto;
    }
  }
`;
