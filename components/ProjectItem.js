import Image from "next/image"
import test from "../public/test.avif"
const ProjectItem = () => {
    return(
        <div>
            <Image
                alt="test image"
                src={test}
                width={500}
                height={500}
            />
        </div>
    )
}

export default ProjectItem