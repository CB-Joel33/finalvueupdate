<template>
   
<router-link

 v-for="(course) in courses"
:key="course._id"
:to="{ name: 'CourseDetail', params: { id: course._id } }"
>
    
</router-link>
  
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export default{
    setup(){

const courses = ref([]);
const route = useRoute();



onMounted(async () => {

    try{
        const response = await axios.get(`https://zacraclearningwebsite.onrender.com/courses?page=${route.params.id}&limit=9`);
        courses.value=response.data.Data;
    } catch (error) {       
        console.error("Error fetching courses:", error)
    }

}
)
 return { course }

}}

</script>

<style>

</style>    