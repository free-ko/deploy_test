import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 80px;

        /* iPhone 5/SE */
        @media (max-width:320px) {
            padding-top: 50px;
        }

        /* iPhone 6/7/8 */
        @media (min-width: 321px) and (max-width:375px) {
            padding-top: 50px;
        } 

          /* iPhone 6/7/8/Plus */
        @media (min-width: 376px) and (max-width:414px) {
            padding-top: 50px;
        }
    
`;

export default globalStyles;
