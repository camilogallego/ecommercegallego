import { cards } from '../components/Cards/contanst'

export default function getCards() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cards)
        })
    })
}
