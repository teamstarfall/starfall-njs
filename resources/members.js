const members = [
    {
        id: 0,
        discord_id: "189690228292845568",
        name: "Angel",
        aka: "angelolz",
        tagline: "fuck it, we ball",
        socials: [
            {
                name: "Website",
                url: "https://angelolz.one/",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/angelolz1",
            },
            {
                name: "Bluesky",
                url: "https://bsky.app/profile/angelolz.one",
            },
            {
                name: "Twitch",
                url: "https://www.twitch.tv/angelolz1",
            },
            {
                name: "YouTube",
                url: "https://www.youtube.com/c/angelolz",
            },
            {
                name: "Github",
                url: "https://github.com/angelolz1",
            },
            {
                name: "Ko-fi",
                url: "https://ko-fi.com/angelolz",
            },
        ],
        lastFm: [
            {
                userName: "angelolz",
                api_key: process.env.REACT_APP_LASTFM_API_KEY_ANGEL,
            },
        ],
        _imgname: "angel.png",
        bg_color: "linear-gradient(to right, rgba(29, 203, 140, 0.50), rgba(160, 255, 39, 0.50))",
    },
    {
        id: 1,
        discord_id: "189682724334862336",
        name: "Joshua",
        aka: "azuretoast",
        tagline: "go for broke",
        socials: [
            {
                name: "Twitter",
                url: "https://twitter.com/azuretoast",
            },
            {
                name: "Bluesky",
                url: "https://bsky.app/profile/azuretst.bsky.social",
            },
            {
                name: "Github",
                url: "https://github.com/AzureToast/",
            },
        ],
        lastFm: [
            {
                userName: "azuretst",
                api_key: process.env.REACT_APP_LASTFM_API_KEY_JOSH,
            },
        ],
        _imgname: "josh.png",
        bg_color: "linear-gradient(to right, rgba(101, 251, 210, 0.50), rgba(0, 163, 249, 0.50))",
    },
];

export default members;
