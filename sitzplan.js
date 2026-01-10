/**
 * TODO:
 *  sitzpläne auswählen
 *  legende
 *  preisrechnung
 *  zufällige ausverkaufte sitze
 *  download funktion
 *  farben ändern
 *  kontaktdaten
 */

(() => {
    const createSeat = (seatType) => {
        const seat = document.createElement("div");
        seat.classList.add("seat", seatType);
        return seat;

    }
    const createSeatGroup = (groupType, seatCount) => {
        const seatGroup = document.querySelector(".seat-group." + groupType);
        for (let i = 0; i < seatCount; i++) {
            const seat = createSeat(groupType);
            seatGroup.appendChild(seat);
        }
    }
    const init = () => {
        const groups = [
            { groupType: "vip", seatCount:20 },
            { groupType: "regular", seatCount:50 },
            { groupType: "standing", seatCount:40 }
        ]

        groups.forEach((group) => {
            createSeatGroup(group.groupType,group.seatCount);
        })






    }
    init();
})()