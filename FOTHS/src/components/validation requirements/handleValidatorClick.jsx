// import { validator } from "./validation";

window.location.href="./dashboard"
const dashboard = window.location.href;

let isValid = false;

const handleValidatorClick = () => {
    
    return isValid=true ? dashboard : alert("Your credentials are invalid. Please try again.")
}

export default handleValidatorClick;