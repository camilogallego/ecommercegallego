import { cards } from '../components/Cards/contanst'

function getCards() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cards)
        },
            3000)
    })
}

export default getCards
