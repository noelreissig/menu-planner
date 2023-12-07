import { Squada_One } from "@next/font/google";

//TODO: to set the font globally, maybe when setting the Layout

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

function Footer() {
  return (
    <footer
      className={`${squadaOne.className} bg-green h-12 w-full text-white flex flex-col items-center justify-center`}
    >
      @noelreissig
    </footer>
  );
}

export default Footer;
