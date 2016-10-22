const { createElement } = React
const { render } = ReactDOM

const title = createElement(
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'orange', color: 'white' }} />
)

render(
    title,
    document.getElementById('react-container')
)


