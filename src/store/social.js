import { atom } from "nanostores";
import facebook from "../assets/social-logo/facebook-50.svg"
import instagram from "../assets/social-logo/instagram-50.svg"
import whatsApp from "../assets/social-logo/whatsapp-50.svg"

const socialNetworks = atom([
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    img: facebook,
    alt: "Logo de facebook"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    img: instagram,
    alt: "logo de instagram"
  },
  {
    name: "Whatsapp",
    href: "tel: +50376956791",
    img: whatsApp,
    alt: "Logo de whatsapp"
  },
]);

export default socialNetworks;
