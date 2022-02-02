import Logo from "../Logo";
import FooterSection from "./FooterSection";

function CopyrightLabel() {
    return (
        <p className="text-xs font-bold self-end">© 2022 AvaAssistant</p>
    )
}

function FooterMain() {
    return (
        <div className="flex ml-20 flex-wrap">
            <FooterSection title="Contact" links={{
                "Email": "mailto:teamava0001@gmail.com"
            }}/>
            <FooterSection title="Resources" links={{
                "Support": "/support",
                "Commands": "/commands"
            }}/>
            <FooterSection title="Legal" links={{
                "Privacy Policy": "/privacypolicy",
                "Terms of Service": "/termsofservice"
            }}/>
        </div>
    )
}

function FooterHeader() {
    return (
        <div>
            <div className="flex">
                <Logo size="scale-50"/>
                <p className="ml-1.5 self-center h-fit font-bold text-sm">AvaAssistant</p>
            </div>
            <hr className="border-white mb-1"></hr>
            <p className="text-xs mt-2 font-bold mb-10">a bot with personality</p>
            <CopyrightLabel/>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="border-t-2 border-white bg-cyan w-full p-6 pb-3 flex text-white font-sans pr-10 pl-10 sm:pr-12 sm:pl-12 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pr-24 xl:pl-24 2xl:pl-36 2xl:pr-36">
            <FooterHeader/>
            <FooterMain/>
        </footer>
    )
}