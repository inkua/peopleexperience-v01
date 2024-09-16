import { getApiDocs } from "@/libs/swagger";
import ReactSwagger from "./react-swagger";

const IndexPage = async () => {
    const spec = await getApiDocs();
    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    );
};

export default IndexPage;