var fs = require('fs')
    , fm = require('front-matter')

fs.readFile('./example.md', 'utf8', function(err, data){
    if (err) throw err

    var content = fm(data)

    console.log(content)
    console.log('content.layout=',content.attributes.layout)
    /*
     * content = {
     *   attributes: { title: "Just hack'n", description: 'Nothing to see here' },
     *   body: 'This is some text about some stuff that happened sometime ago\n',
     *   bodyBegin: 6,
     *   frontmatter: "title: Just hack'n\ndescription: Nothing to see here"
     * }
     */
})
