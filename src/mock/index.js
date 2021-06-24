import { cards } from '../components/Cards/contanst'

export function getCards() {
    return new Promise((resolve, reject) => {
        resolve(cards)
    })
}

export function getCardsId(id) {
    return new Promise((resolve, reject) => {
        resolve(cards.find(cardId => cardId.id == id))
    })

}
