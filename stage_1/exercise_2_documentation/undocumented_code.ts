function calculateArea(radius: number): number {
    const area: number = 3.14159 * radius * radius;
    return area;
}

function printArea(radius: number): void {
    const area: number = calculateArea(radius);
    console.log("The area of a circle with radius", radius, "is", area);
}

function calculateCircumference(radius: number): number {
    const circumference: number = 2 * 3.14159 * radius;
    return circumference;
}

function printCircumference(radius: number): void {
    const circumference: number = calculateCircumference(radius);
    console.log("The circumference of a circle with radius", radius, "is", circumference);
}

function calculateDiameter(radius: number): number {
    return 2 * radius;
}

function compareCircleAreas(radius1: number, radius2: number): void {
    const area1: number = calculateArea(radius1);
    const area2: number = calculateArea(radius2);
    
    if (area1 > area2) {
        console.log(`The circle with radius ${radius1} has a larger area than the circle with radius ${radius2}`);
    } else if (area1 < area2) {
        console.log(`The circle with radius ${radius1} has a smaller area than the circle with radius ${radius2}`);
    } else {
        console.log(`Both circles have the same area`);
    }
}

function calculateSectorArea(radius: number, angleDegrees: number): number {
    const angleRadians: number = (angleDegrees * Math.PI) / 180;
    return (angleRadians / (2 * Math.PI)) * calculateArea(radius);
}

const r: number = 5;
printArea(r);
printCircumference(r);
console.log("The diameter of the circle is", calculateDiameter(r));

const r2: number = 7;
compareCircleAreas(r, r2);

const sectorAngle: number = 90;
const sectorArea: number = calculateSectorArea(r, sectorAngle);
console.log(`The area of a ${sectorAngle}° sector with radius ${r} is ${sectorArea.toFixed(2)}`);