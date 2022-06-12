import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { device } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${device.desktop}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .tablet {
        display: block;
        ${device.tablet} {
            display: none;
        }
    }
    .mobile{
        display: none;
        ${device.mobileL}{
            display:block;
        }
    }
    .laptop {
        display: none;
        ${device.laptopL} {
            display: block;
        }
    }
`;
