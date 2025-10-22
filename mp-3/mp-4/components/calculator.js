export function addition(a, b) {
    return a + b;
}

export function subtraction(a, b) {
    return a - b;
}

export function multiplication(a, b) {
    return a * b;
}

export function division(a, b) {
    if (b === 0) {
        return Infinity;
    }
    return a / b;
}

export function power(a, b) {
    if (b < 0) {
        a = 1 / a;
        b = -b;
    }
    if (b === 0) return 1;
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    
    return result;
}
