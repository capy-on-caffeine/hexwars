const parseRgbFromString = (color: string, hex: boolean = false) => {
    if (hex) {
        // hex mode
        const match = color.match(/[a-f\d]{2}/gi);
        if (!match) throw new Error("Invalid color format");
        const [r, g, b] = match.map((channel) => parseInt(channel, 16));
        return { r, g, b };
    } else {
        // rgb mode
        const match = color.match(/\d+/g);
        if (!match) throw new Error("Invalid color format");
        const [r, g, b] = match.map(Number);
        return { r, g, b };
    }
};

const decimalToHexadecimal = (decimal: number): string => {
    const hex = decimal.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}

const rgbToHex = (rgb: string): string => {
    const { r, g, b } = parseRgbFromString(rgb);
    return `#${decimalToHexadecimal(r)}${decimalToHexadecimal(g)}${decimalToHexadecimal(b)}`;
}

export {
    parseRgbFromString,
    decimalToHexadecimal,
    rgbToHex
};