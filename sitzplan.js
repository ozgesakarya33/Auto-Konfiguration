/**
 * TODO:
 *  zufällige ausverkaufte sitze
 *  download funktion
 *  farben ändern
 *  kontaktdaten
 */

(() => {
    const preisRechnung = document.querySelector("#preisrechnung");
    const tickets = [];
    const ticketPreis = {
        vip: 99.99,
        regular: 79.99,
        standing: 59.99
    };



    const createSeat = (groupType) => {
        const seat = document.createElement("div");
        seat.classList.add("seat", groupType);
        seat.addEventListener("click", () => {
            toggleSelection(seat, groupType);
        });
        return seat;

    }
    const createSeatGroup = (groupType, seatCount) => {
        const seatGroup = document.querySelector(".seat-group." + groupType);
        for (let i = 0; i < seatCount; i++) {
            const seat = createSeat(groupType);
            seatGroup.appendChild(seat);
        }
    }

    const calculatePrice = () => {
        const total = tickets.reduce((sum, ticket) => {
            return sum + ticketPreis[ticket.groupType];
        }, 0);
        preisRechnung.innerHTML = total.toFixed(2) + " €";
    }

    function toggleSelection(seat, groupType) {
        const isSelected = seat.classList.contains("selected")
        if (isSelected) {
            seat.classList.remove("selected");
            let foundItemIndex = tickets.findIndex((ticket) => ticket.groupType === groupType
            );
            tickets.splice(foundItemIndex, 1);
        }
        else {
            seat.classList.add("selected");
            tickets.push({ groupType });
        }

        calculatePrice()
    }


    const init = () => {
        const groups = [
            { groupType: "vip", seatCount: 20 },
            { groupType: "regular", seatCount: 50 },
            { groupType: "standing", seatCount: 40 }
        ]

        groups.forEach((group) => {
            createSeatGroup(group.groupType, group.seatCount);
        });


    }
    init();
})()