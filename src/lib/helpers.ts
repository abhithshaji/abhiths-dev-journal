export function getTodaysDate() {
    return new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long"
        , year: "numeric"
    });
}