<template>
    <div>
        <slot></slot>
        <input v-model="searchterm" type="text">
        <table>
            <thead>
            <th>Title</th>
            <th>
                Description
            </th>
            <th>
                Content
            </th>
            <th>

            </th>
            </thead>
            <tbody>
            <tr v-for="usernote in filteredNotes" :key="usernote.title">
                <td>{{usernote.title}}</td>
                <td>{{usernote.description}}</td>
                <td>{{usernote.content}}</td>
                <td> <button class="button">Delete</button> </td>
            </tr>
            </tbody>
        </table>

        <p><button class="button" @click.prevent="openMe">Click me for a modal</button></p>

        <div class="reveal" id="exampleModal11" aria-labelledby="exampleModalHeader11" data-reveal>
            <h1 id="exampleModalHeader11">Label for the Modal!</h1>
            <p class="lead">I am even more accessible than the other modals.</p>
            <button class="close-button" data-close aria-label="Close Accessible Modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

    </div>

</template>
<script>

   // import * as Reveal from "foundation-sites/js/foundation.reveal";

    export default{
        props:["notelist"],
        data(){
            return{
                searchterm:"",
            }
        },
        methods: {

            openMe() {
                var popup = new Foundation.Reveal($('#exampleModal11'));
                popup.open();
            }

        },
        computed:{
            filteredNotes:function () {
                if(this.searchterm==""){
                    return this.notelist;
                }
                else
                    return  this.notelist
                        .filter(note=>note.title.toLowerCase()
                            .indexOf(this.searchterm.toLowerCase())!==-1);
            }
        },

        mounted: function () {
            this.$nextTick(function () {
               // window.$(this.$el).daterangepicker();

               // window.$('#exampleModal11').foundation('open');


            })
        }
    }
</script>
<style>
</style>