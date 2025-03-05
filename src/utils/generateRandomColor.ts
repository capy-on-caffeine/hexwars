const generateRandomColor = () => {
    const redChannel = Math.floor(Math.random() * 256);
    const greenChannel = Math.floor(Math.random() * 256);
    const blueChannel = Math.floor(Math.random() * 256);

    return `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`;
}

export default generateRandomColor;