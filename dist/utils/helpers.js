"use strict";
/**
 * Helper utilities for generating layout math, particles, and custom timings.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParticles = generateParticles;
exports.chunkText = chunkText;
exports.generateVectorArray = generateVectorArray;
/**
 * Generates a set of random floating particles inside specified width/height bounds.
 */
function generateParticles(count, width, height) {
    const particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: (Math.random() - 0.5) * width,
            y: (Math.random() - 0.5) * height,
            size: Math.random() * 4 + 2,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5 + 0.2,
        });
    }
    return particles;
}
/**
 * Formats multi-line text into clean chunk displays.
 */
function chunkText(text, chunkSize) {
    const words = text.split(' ');
    const chunks = [];
    let currentChunk = [];
    for (const word of words) {
        currentChunk.push(word);
        if (currentChunk.join(' ').length >= chunkSize) {
            chunks.push(currentChunk.join(' '));
            currentChunk = [];
        }
    }
    if (currentChunk.length > 0) {
        chunks.push(currentChunk.join(' '));
    }
    return chunks;
}
/**
 * Returns an array of numbers representing a high-dimensional vector.
 */
function generateVectorArray(dimensions = 8) {
    return Array.from({ length: dimensions }, () => Math.round((Math.random() * 2 - 1) * 100) / 100);
}
//# sourceMappingURL=helpers.js.map