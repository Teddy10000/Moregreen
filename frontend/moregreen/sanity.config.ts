<<<<<<< HEAD
import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import project from './sanity/schemas/project-schema';

const config = defineConfig({

    projectId: "yk2er0vp",
    dataset:"production",
    title: "This is a website for a betting subscription website ",
    apiVersion:"2023-09-22",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:[project]}


})

=======
import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import project from './sanity/schemas/project-schema';

const config = defineConfig({

    projectId: "yk2er0vp",
    dataset:"production",
    title: "This is a website for a betting subscription website ",
    apiVersion:"2023-09-22",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:[project]}


})

>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
export default config;