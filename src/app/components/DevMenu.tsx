import { DevMenuProps } from "../types";

const DevMenu: React.FC<DevMenuProps> = ({
    showTeamBoxes,
    setShowTeamBoxes,
    showText,
    setShowWidgets,
    showWidgets,
    setShowFooter,
    showFooter,
    setShowText,
    showBackground,
    setShowBackground,
    setShowDev,
}) => {
    return (
        <div className="flex flex-col bg-gray-800 border-3 rounded-md absolute top-0 m-3 justify-center align-middle gap-2 py-2 px-2">
            <p className="text-white font-bold text-center">Dev Menu</p>
            <div className="flex flex-col gap-1">
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowText(!showText)}
                >
                    {showText ? "Hide" : "Show"} Text
                </button>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowTeamBoxes(!showTeamBoxes)}
                >
                    {showTeamBoxes ? "Hide" : "Show"} TeamBoxes
                </button>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowWidgets(!showWidgets)}
                >
                    {showTeamBoxes ? "Hide" : "Show"} Widgets
                </button>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowFooter(!showFooter)}
                >
                    {showTeamBoxes ? "Hide" : "Show"} Footer
                </button>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowBackground(!showBackground)}
                >
                    {showTeamBoxes ? "Hide" : "Show"} Background
                </button>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => {
                        setShowText(!showText);
                        setShowTeamBoxes(!showTeamBoxes);
                        setShowWidgets(!showWidgets);
                        setShowBackground(!showBackground);
                    }}
                >
                    {showTeamBoxes && showTeamBoxes ? "Hide" : "Show"} All
                </button>
                <hr className="my-2 mx-1 border-[#757474] align-middle"></hr>
                <button
                    className="border-2 bg-gray-700 hover:bg-gray-500 rounded-md w-[150px] pd-2 text-white"
                    onClick={() => setShowDev(false)}
                >
                    Close Dev Menu
                </button>
            </div>
        </div>
    );
};

export default DevMenu;
