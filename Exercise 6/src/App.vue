<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Project Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li 
                        class="list-group-item"
                        v-bind:class="{ selected: index === selected-1 }"
                        v-for="(project, index) in projects"
                        v-bind:key="index"
                    >
                        <projects-list
                            v-bind:class="{ active: isActive }"
                            v-bind:project="project"
                            @showDetails="selected = $event"
                        />
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p v-if="!selected">Project Details are currently not updated</p>
                <projects-detail
                    v-else
                    v-bind:details="projects[selected-1].details"
                />
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Project are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Projects from './components/Projects.vue';
    import Details from './components/Details.vue';

    export default {
        data: function() {
            return {
                projects: [
                    { id: 1, details:{ 'Name': 'ESPN', 'Technology': 'React + Redux' }},
                    { id: 2, details:{ 'Name': 'OpenBank', 'Technology': 'Angular + Mobx' }},
                    { id: 3, details:{ 'Name': 'Glow', 'Technology': 'Angular' }}
                ],
                selected: null
            }
        },
        components: {
            projectsList: Projects,
            projectsDetail: Details 
        }
    }
</script>

<style>
    li {
        list-style: none;
        cursor: pointer;
    }
    li:hover {
        background-color: rgba(0,0,0,.125);
    }
    .selected {
        background-color: rgba(0,0,0,.125);
        font-weight: bold;
    }
</style>
