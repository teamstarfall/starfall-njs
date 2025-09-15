import sites from "../../../resources/sites";
import { Site } from "../types";
import SitesComponent from "./Site";

const FooterComponent = () => {
    return (
        <div 
            className="flex flex-col text-center w-full py-3 my-4 sm:my-10 gap-4 max-w-[1265px] max-h-[100px] mx-auto m-4 bg-gray-800 border-2 rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            style={{backgroundImage: "linear-gradient(to right, rgba(29, 203, 140, 0.50), rgba(0, 163, 249, 0.50))"}}
        >
            <div className="flex items-center pl-5">
                <span className="flex flex-col   text-left">
                    <span>
                        Made with 💚💙 by <b>Team Starfall</b>
                    </span>
                    <span>
                        (
                        <a className="underline" href="https://angelolz.one" target="_blank" rel="noopener noreferrer">
                            angelolz
                        </a>
                        {" + "}
                        <a className="underline" href="https://twitter.com/azuretoast" target="_blank" rel="noopener noreferrer">
                            AzureToast
                        </a>
                        )
                    </span>
                </span>
                <span className="flex flex-row pl-10 items-center px-4 gap-2">
                    Our Sites: 
                    <span className="flex flex-row place-content-between gap-2">
                        {sites.map((site: Site) => {
                            return (
                                <SitesComponent
                                    key={site.id}
                                    site={site}
                                />
                            );
                        })}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default FooterComponent;