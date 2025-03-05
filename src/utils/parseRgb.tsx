const parseRgb = (color: string, hex: boolean = false) => {
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

export default parseRgb;