import Head from "next/head"
import ProjectItem from "../../components/ProjectItem"
const ProjectsMain = () => {
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <h1 className="text-5xl font-bold my-4">Projects</h1>
            <p>List of current projects:</p>
            <ProjectItem/>
        </div>
    )
}

export default ProjectsMain