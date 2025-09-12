const adjustBrightnessRGB = (rgbString: string, factor: number): string => {
    const match = rgbString.match(/\d+/g);
    if (!match || match.length < 3) return rgbString; // Invalid input, return original

    let [r, g, b] = match.map(Number);

    r = Math.min(255, Math.max(0, Math.round(r * factor)));
    g = Math.min(255, Math.max(0, Math.round(g * factor)));
    b = Math.min(255, Math.max(0, Math.round(b * factor)));

    return `rgb(${r}, ${g}, ${b})`;
};

const adjustBrightnessHex = (hex: string, factor: number): string => {
    const normalizedHex = hex.replace(/^#/, "");

    const fullHex = normalizedHex.length === 3 
        ? normalizedHex.split("").map(c => c + c).join("") 
        : normalizedHex;

    if (fullHex.length !== 6) return hex;
    let r = parseInt(fullHex.slice(0, 2), 16);
    let g = parseInt(fullHex.slice(2, 4), 16);
    let b = parseInt(fullHex.slice(4, 6), 16);

    r = Math.min(255, Math.max(0, Math.round(r * factor)));
    g = Math.min(255, Math.max(0, Math.round(g * factor)));
    b = Math.min(255, Math.max(0, Math.round(b * factor)));

    // Convert back to hex
    const toHex = (c: number) => c.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const adjustBrightness = (color: string, factor: number): string => {
    return color.startsWith("#") ? adjustBrightnessHex(color, factor) : adjustBrightnessRGB(color, factor);
};
