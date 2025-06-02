// Image component that displays graphic on Fruit Cards in FOTHS Main page

import React from "react";
import image from '../images/Faith.svg'
// FOTHS/src/images/Faith.svg
function Image() {
    return (
    <img src={image} alt="graphic-of-orange-fruit" width="95px" height="93px" />
    )

}

export default Image;