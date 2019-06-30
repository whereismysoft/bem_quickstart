({
    block : 'page',
    title : 'experiment',
    head : [
        { elem : 'css', url : 'experiment.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'experiment.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'experiment',
                content : [
                {
                    elem : 'greeting',
                    content : 'Hello %user%!'
                },
                                {
                    block : 'input',
                    mods : {theme : 'islands', size : 'm'},
                        // подмешиваем элемент для добавления CSS-правил
                    mix : { block : 'experiment', elem : 'input' },
                    name : 'name',
                    placeholder : 'User name'
                },
                {
                    block : 'button',
                    mods : {theme : 'islands', size : 'm', type : 'submit'},
                    text : 'Click'
                },
                {
                    block : 'button',
                    mods : {blue: true, type : 'submit'},
                    text : 'experiment button'
                }
            ]
        }
    ]
})