import Banner from "../../banner";
import ContactCPN from "../../contact";
import Maps from "../../maps";
import { StyleMainPage } from "../../style-mui";

export default function Contact() {
    return (
        <StyleMainPage>
            <Banner content={{
                name: "Our Contacts",
                src: "Images/home/contact/banner.svg"
            }} />
            <Maps />
            <ContactCPN />
        </StyleMainPage>
    );
}