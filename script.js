new Vue({
    el:'#notebook',

    methods:{
        saveNote(val){
            console.log('saving note:', val)
            localStorage.setItem('content', val)
        },
    },

    data(){
        return{
            content:'this is a note.',
        }
    },

    computed:{
        notePreview(){
            return marked(this.content)
        },
    },

    
    watch:{
        content:'saveNote',
    },
})



const html = marked('**bold** *Italic* [link] (http://vuejs.org/)')
console.log(html)