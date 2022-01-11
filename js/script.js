const btn = document.getElementById('btn')
const input = document.getElementById('searchGiphy')
const select = document.getElementById('count')
const form = document.querySelector('form')
const output = document.getElementById('output')

const API = 'https://api.giphy.com/v1/gifs/search?'
const KEY = 'api_key=3TQi2zymLz7a8nLNK385kNn3VT7KklcP'
const limit = '&limit='
const params = '&q='

const searchGiphs = async () => {
    const text = input.value
    const count = select.value
    const url = API + KEY + limit + count + params + text
    const request = await fetch(url)
    const response = await request.json()
    renderGiphs(response.data)
    input.value = ''
}

const renderGiphs = (data) => {
    output.innerHTML = ''
    data.forEach(el => {
        const card = document.createElement('div')
        const title = document.createElement('h3')
        const ifrm = document.createElement('iframe')

        card.classList.add('card')

        title.textContent =
            el.title.length > 15
                ?
                el.title.slice(0, 15) + '...'
                :
                el.title

        title.title = el.title

        ifrm.src = el.embed_url

        card.append(title, ifrm)
        output.append(card)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphs()
})

