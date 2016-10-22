var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}


const title = React.createElement('h1',
                                  {id:'title', className: 'header', style: style},
                                  'Hello World!')

ReactDOM.render(title, document.getElementById('react-container'))