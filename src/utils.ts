const AREA_FRIENDLY = {
    "after-dark": "After Dark",
    "daytime": "Daytime",
    "culture": "Speech & Culture",
    "sport": "Sport",
    "news": "News & Current Affairs",
}

export const getAreaFriendlyName = (area: "after-dark" | "daytime" | "culture" | "sport" | "news") => {
    return AREA_FRIENDLY[area];
}
