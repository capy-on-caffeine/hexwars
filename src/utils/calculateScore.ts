// This takes the final target and user-guessed colors, calculates how close theu are and then rates the attempt out of 100

import { parseRgbFromString } from "./colors";

// Suggestion: use the guesses used as a metric as well

// Consider that the user color is ALREADY VALIDATED before entering this function

// User color will be a hexcode, target color will be rgb

// What if the first guess has the most weightage and progressive guesses have less weightage?

const calculateScore = (targetColor: string, userColor: string) : number => {
    const targetRgb = parseRgbFromString(targetColor);
    const userRgb = parseRgbFromString(userColor, true);

    const distance = Math.abs(targetRgb.r - userRgb.r) + Math.abs(targetRgb.g - userRgb.g) + Math.abs(targetRgb.b - userRgb.b);
    const maxPossibleDistance = 255 * 3;

    const score = Math.round(100 - (distance / maxPossibleDistance) * 100);
    return score;
}

export default calculateScore;