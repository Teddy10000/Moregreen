import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";

const config = defineConfig({

    projectId: "yk2er0vp",
    dataset:"production",
    title: "This is a website for a betting subscription website ",
    apiVersion:"2023-09-22",
    basePath: "/admin",
    plugins: [deskTool()]

})

export default config;